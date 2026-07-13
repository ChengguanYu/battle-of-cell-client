# MemoryPack → Protobuf 回退迁移实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将客户端消息序列化从 MemoryPack 回退到 protobuf，搭建 protobufjs 静态代码生成工具链，修复 `AuthContext.tsx` 的断链导入

**Architecture:** 在 `src/proto/` 目录下用 protobufjs 的 pbjs/pbts 将 `.proto` 编译为静态 bundle（JS + .d.ts），手写 `OpCode.ts` 镜像 C# 端常量，`AuthContext.tsx` 改用 `Fantasy.BattleOfCell.Message.*` 命名空间进行 encode/decode。

**Tech Stack:** protobufjs 7.x (静态代码生成模式), protobufjs-cli, TypeScript, Vite

## Global Constraints

- 所有 `.proto` 使用 `package BattleOfCell.Message;` 命名空间
- protobufjs `@^7.4.0` 作为 dependencies，`protobufjs-cli@^2.5.6` 作为 devDependencies
- OpCode 完全手动维护，每一个常量从 C# `OuterOpcode` 镜像过来
- 不修改 `GameNetwork.ts`、`Packet.ts`、`LoginPage.tsx`、`config.ts`

---

### Task 1: 安装 protobufjs 依赖

**Files:**
- Modify: `package.json`（添加 dependencies + devDependencies）
- Run: `npm install`

**Interfaces:**
- Consumes: 无
- Produces: `protobufjs` + `protobufjs-cli` 安装到 node_modules，可供后续 Task 3 的 pbjs/pbts 命令调用

- [ ] **Step 1: 添加 protobufjs 到 dependencies**

在 `package.json` 的 `dependencies` 对象中添加：
```json
"protobufjs": "^7.4.0"
```

- [ ] **Step 2: 添加 protobufjs-cli 到 devDependencies**

在 `package.json` 的 `devDependencies` 对象中添加：
```json
"protobufjs-cli": "^2.5.6"
```

- [ ] **Step 3: 安装依赖**

执行：
```bash
npm install
```
预期输出末尾出现 `up to date` 或 `added X packages`，无报错。

- [ ] **Step 4: 验证 pbjs/pbts 可用**

```bash
npx pbjs --version
npx pbts --version
```
预期：两个命令均输出版本号，无报错。

---

### Task 2: 创建 OpCode.ts

**Files:**
- Create: `src/proto/OpCode.ts`

**Interfaces:**
- Consumes: 无
- Produces: 导出的 `OpCode` 常量对象 + `OpCode` 类型（`typeof OpCode[keyof typeof OpCode]`），供 Task 4 的 AuthContext.tsx import 使用

- [ ] **Step 1: 创建 OpCode.ts 文件**

创建 `src/proto/OpCode.ts`，内容如下：

```typescript
// 镜像 Fantasy.OuterOpcode — 与服务端保持同步
export const OpCode = {
  // EntryHome
  EntryHomeReq: 268445457,
  EntryHomeRes: 402663185,
} as const

export type OpCode = (typeof OpCode)[keyof typeof OpCode]
```

- [ ] **Step 2: 验证 TypeScript 编译**

```bash
npx tsc --noEmit
```
预期：`src/proto/OpCode.ts` 编译通过，无报错。

---

### Task 3: 添加 proto:build 脚本并生成 bundle

**Files:**
- Modify: `package.json`（添加 proto:build 脚本，更新 dev/build 命令）
- Create: `src/proto/bundle.js`（构建产物）
- Create: `src/proto/bundle.d.ts`（构建产物）

**Interfaces:**
- Consumes: `src/proto/EntryHome.proto`（已有）、`src/proto/OpCode.ts`（Task 2 创建）
- Produces: `Fantasy.BattleOfCell.Message.EntryHomeReq` 和 `EntryHomeRes` 的可 import 的静态 JS 模块 + 类型声明，供 Task 4 的 AuthContext.tsx import 使用

- [ ] **Step 1: 在 package.json 中添加 proto:build 脚本**

在 `package.json` 的 `scripts` 对象中新增：
```json
"proto:build": "pbjs -t static-module -w es6 -o src/proto/bundle.js src/proto/*.proto && pbts -o src/proto/bundle.d.ts src/proto/bundle.js"
```

- [ ] **Step 2: 更新 dev 和 build 脚本**

将 `scripts` 中的：
```json
"dev": "vite",
"build": "tsc -b && vite build"
```
改为：
```json
"dev": "npm run proto:build && vite",
"build": "npm run proto:build && tsc -b && vite build"
```

- [ ] **Step 3: 执行 proto:build 生成 bundle**

```bash
npm run proto:build
```
预期输出（pbjs 无输出是正常的，pbts 可能打印文件路径）：
- `src/proto/bundle.js` 被创建
- `src/proto/bundle.d.ts` 被创建

验证产物：
```bash
ls -la src/proto/bundle.js src/proto/bundle.d.ts
```
预期：两个文件存在且非空。

- [ ] **Step 4: 验证 bundle 类型声明**

检查 `src/proto/bundle.d.ts` 的开头部分，确认包含 `BattleOfCell` 命名空间和 `EntryHomeReq`/`EntryHomeRes` 的类型定义：
```bash
head -30 src/proto/bundle.d.ts
```
预期：包含类似 `namespace BattleOfCell { namespace Message { ... } }` 的结构。

---

### Task 4: 修改 AuthContext.tsx 的序列化逻辑

**Files:**
- Modify: `src/hooks/AuthContext.tsx`（3 处 import 行 + encode/decode 调用）

**Interfaces:**
- Consumes: `Fantasy`（来自 `../proto/bundle`）、`OpCode`（来自 `../proto/OpCode`）
- Produces: 编译通过、登录流程使用 protobuf 序列化

- [ ] **Step 1: 替换 import 语句**

在 `src/hooks/AuthContext.tsx` 中找到：
```typescript
import { OpCode } from "../ts-protocol/opcodes"
import { EntryHomeReq } from "../ts-protocol/EntryHomeReq"
import { EntryHomeRes } from "../ts-protocol/EntryHomeRes"
```
替换为：
```typescript
import { Fantasy } from "../proto/bundle"
import { OpCode } from "../proto/OpCode"
```

- [ ] **Step 2: 替换 encode 调用**

在 `src/hooks/AuthContext.tsx` 中找到以下 MemoryPack 编码代码（第 63-65 行）：
```typescript
    const entryReq = new EntryHomeReq()
    entryReq.token = data.token
    const reqBody = EntryHomeReq.serialize(entryReq)
```
替换为 protobuf 编码：
```typescript
    const reqBody = Fantasy.BattleOfCell.Message.EntryHomeReq.encode(
      Fantasy.BattleOfCell.Message.EntryHomeReq.create({
        token: data.token,
      }),
    ).finish()
```

- [ ] **Step 3: 替换 decode 调用**

在 `src/hooks/AuthContext.tsx` 中找到以下 MemoryPack 解码代码（第 75 行）：
```typescript
    const entryRes = EntryHomeRes.deserialize(respBuffer)
```
替换为 protobuf 解码（注意 `respBuffer` 是 `ArrayBuffer`，需要包一层 `Uint8Array`）：
```typescript
    const entryRes = Fantasy.BattleOfCell.Message.EntryHomeRes.decode(
      new Uint8Array(respBuffer),
    )
```

- [ ] **Step 4: 验证 TypeScript 编译**

```bash
npx tsc --noEmit
```
预期：无任何类型错误。
如果报错 `Cannot find module '../ts-protocol/...'`，说明还有残留的旧 import，检查 Step 1 是否完全替换干净。

---

### Task 5: 最终验证

**Files:** 无改动，仅运行验证命令

- [ ] **Step 1: 完整构建**

```bash
npm run build
```
预期：
1. `proto:build` 先执行，生成 bundle
2. `tsc -b` 通过
3. `vite build` 成功输出产物到 `dist/`

- [ ] **Step 2: 检查 bundle 产物是否打包到 dist**

```bash
ls -la dist/assets/*.js | head -5
grep -l "EntryHome" dist/assets/*.js 2>/dev/null || echo "EntryHome 可能被 tree-shaking 或内联，属正常"
```
预期：构建成功，无报错。

- [ ] **Step 3: 确认无 MemoryPack 残留引用**

```bash
grep -r "ts-protocol" src/ --include="*.ts" --include="*.tsx" --include="*.js" || echo "无残留引用"
```
预期：输出 `无残留引用`。

- [ ] **Step 4: 最终提交**

```bash
git add src/proto/OpCode.ts package.json package-lock.json src/hooks/AuthContext.tsx
git add src/proto/bundle.js src/proto/bundle.d.ts
git commit -m "feat: 回退到 protobuf，替换 MemoryPack 序列化

- 安装 protobufjs + protobufjs-cli 依赖
- 创建 OpCode.ts 镜像 C# OuterOpcode 常量
- 添加 proto:build 构建脚本并生成 bundle
- AuthContext.tsx 改用 Fantasy.* protobuf 调用"
```
