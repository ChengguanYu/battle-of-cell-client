# MemoryPack → Protobuf 回退迁移设计

## 概述

将客户端的消息序列化方案从 MemoryPack 回退为 protobuf，重新搭建 protobufjs 静态代码生成工具链，替换 `AuthContext.tsx` 中对 `ts-protocol`（MemoryPack）的引用为 protobuf bundle 调用。

## 动机

上一轮序列化从 protobuf 迁移到 MemoryPack 的尝试未完成（`src/ts-protocol/` 目录实际不存在），且 MemoryPack 方案不利于与服务端基于 Fantasy 框架 + protobuf 的生态保持统一。回退 protobuf 可复用成熟工具链，与服务端类型定义保持一致。

## Proto 目录布局

所有文件集中在 `src/proto/` 下：

```
src/proto/
  EntryHome.proto        # 现有定义（客户端进家园请求/响应）
  Login.proto            # （后续扩展示例）
  OpCode.ts              # 手动维护，镜像 C# Fantasy.OuterOpcode 常量
  bundle.js              # pbjs 编译产物（.proto → 静态 JS）
  bundle.d.ts            # pbts 类型声明（JS → .d.ts）
```

- 所有 `.proto` 合编为一个 bundle，新增消息时只需加 `.proto` 文件后重新编译
- `OpCode.ts` 与 bundle 无依赖关系，独立维护

## OpCode 定义

`src/proto/OpCode.ts`：

```typescript
// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  // EntryHome
  EntryHomeReq: 268445457,
  EntryHomeRes: 402663185,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
```

- `as const` 确保常量具有字面量类型
- 按功能分组注释
- 完全手动维护，C# 端 opcode 变更后同步更新此文件

## 构建流水线

### 依赖（devDependencies）

| 包 | 用途 |
|---|------|
| `protobufjs@^7.4.0` | 类型定义和运行时支持（作为依赖存在，静态代码生成模式下运行时几乎不需要） |
| `protobufjs-cli@^2.5.6` | `pbjs` / `pbts` 命令行工具 |

### 构建脚本

```json
{
  "scripts": {
    "proto:build": "pbjs -t static-module -w es6 -o src/proto/bundle.js src/proto/*.proto && pbts -o src/proto/bundle.d.ts src/proto/bundle.js",
    "dev": "npm run proto:build && vite",
    "build": "npm run proto:build && tsc -b && vite build"
  }
}
```

- `pbjs -t static-module -w es6`：生成 ES module 格式的静态 JS，不依赖运行时解析
- `pbts`：从 JS 产物反推 `.d.ts` 类型声明
- `dev` / `build` 自动先编译 proto，不会遗漏
- 新增/修改 `.proto` 后只需 `npm run proto:build` 重新生成

### Vite 兼容性

`bundle.js` 是标准 ES module，Vite 直接处理 import，无需添加任何插件。

## 序列化接口兼容

当前 `GameNetwork` 层的接口签名：

| 方法 | 参数 |
|------|------|
| `request(reqOpcode, reqBody: Uint8Array, respOpcode)` | `reqBody` 为 `Uint8Array` |
| onmessage 回调 | `body` 为 `ArrayBuffer` |

protobufjs 静态模块的接口完全匹配：

- `.encode(message).finish()` → `Uint8Array` ✓
- `.decode(uint8Array)` → 解码对象，需要从 `ArrayBuffer` 转 `Uint8Array` ✓

## 变更清单

### 需修改的文件

| 文件 | 变更内容 |
|------|----------|
| `package.json` | 添加 `protobufjs@^7.4.0`（dependencies）、`protobufjs-cli@^2.5.6`（devDependencies）；添加 `proto:build`、更新 `dev`/`build` 脚本 |
| `src/hooks/AuthContext.tsx` | 将 3 个 `../ts-protocol/` 的 import 替换为 `../proto/bundle` 和 `../proto/OpCode`；替换 encode 和 decode 调用 |

### 需新增的文件

| 文件 | 说明 |
|------|------|
| `src/proto/OpCode.ts` | OpCode 常量定义 |
| `src/proto/bundle.js` | 构建产物，pbjs 生成 |
| `src/proto/bundle.d.ts` | 构建产物，pbts 生成 |

### 保持不变的文件

- `GameNetwork.ts` — 协议层不感知序列化格式
- `Packet.ts` — 包头/解包逻辑不变
- `LoginPage.tsx` — 不直接接触序列化
- `config.ts` — 无关联
- `EntryHome.proto` — 定义已正确，无需修改

## AuthContext 改动详情

### Import 替换

```typescript
// 移除
import { OpCode } from "../ts-protocol/opcodes"
import { EntryHomeReq } from "../ts-protocol/EntryHomeReq"
import { EntryHomeRes } from "../ts-protocol/EntryHomeRes"

// 添加
import { Fantasy } from "../proto/bundle"
import { OpCode } from "../proto/OpCode"
```

### Encode 替换

```typescript
// MemoryPack（旧）
const entryReq = new EntryHomeReq()
entryReq.token = data.token
const reqBody = EntryHomeReq.serialize(entryReq)

// Protobuf（新）
const reqBody = Fantasy.BattleOfCell.Message.EntryHomeReq.encode(
  Fantasy.BattleOfCell.Message.EntryHomeReq.create({
    token: data.token,
  }),
).finish()
```

### Decode 替换

```typescript
// MemoryPack（旧）
const entryRes = EntryHomeRes.deserialize(respBuffer)

// Protobuf（新）
const entryRes = Fantasy.BattleOfCell.Message.EntryHomeRes.decode(
  new Uint8Array(respBuffer),
)
```

## 后续扩展

新增消息类型的流程：

1. 在 `src/proto/` 下创建 `.proto` 文件（使用 `package BattleOfCell.Message;` 保持命名空间一致）
2. 在 `OpCode.ts` 中添加对应的 opcode 常量
3. 执行 `npm run proto:build` 重新生成 bundle
4. 在业务代码中引入 `Fantasy.BattleOfCell.Message.XXX` 使用

## 验收标准

1. `npm run proto:build` 成功生成 `bundle.js` 和 `bundle.d.ts`
2. `npx tsc --noEmit` 通过，无类型错误
3. `npm run build` 通过
4. 登录流程中 WebSocket EntryHomeReq 正常编码发送、EntryHomeRes 正常解码
