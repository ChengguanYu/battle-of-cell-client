# Protobuf → MemoryPack 协议迁移设计

## 概述

将客户端的消息序列化方案从 protobuf 切换为 MemoryPack，移除所有 protobuf 相关代码和依赖，仅保留 `ts-protocol/` 中已生成的 MemoryPack 序列化/反序列化逻辑。

## 变更清单

### 1. AuthContext.tsx — 序列化方式替换

| 位置 | 原 protobuf 代码 | 新 MemoryPack 代码 |
|------|------------------|-------------------|
| import | `import { Fantasy } from "../proto/bundle"` | `import { C2G_LoginRequest } from "../ts-protocol/C2G_LoginRequest"` + `import { G2C_LoginResponse } from "../ts-protocol/G2C_LoginResponse"` |
| 编码 C2G_LoginRequest (L62-67) | `.encode(.create({...})).finish()` → `Uint8Array` | `C2G_LoginRequest.serialize(req)` → `Uint8Array` |
| 解码 G2C_LoginResponse (L77-79) | `.decode(new Uint8Array(respBuffer))` | `G2C_LoginResponse.deserialize(respBuffer)` |

### 2. 删除文件

- `src/proto/OuterMessage.proto` — proto 定义文件
- `src/proto/bundle.js` — protobuf 编译产物 (30KB)
- `src/proto/bundle.d.ts` — protobuf 类型定义 (12KB)

### 3. 依赖清理

- `package.json` 移除 `protobufjs` 和 `protobufjs-cli`
- 执行 `npm install` 自动清理 `package-lock.json`

## 接口兼容性

- `C2G_LoginRequest.serialize(): Uint8Array` — 直接匹配 `gameNetwork.request()` 的 `reqBody: Uint8Array` 参数
- `G2C_LoginResponse.deserialize(buffer: ArrayBuffer)` — 直接匹配 `gameNetwork.request()` 返回的 `ArrayBuffer`

## 风险

- MemoryPack 和 protobuf 的二进制格式不兼容，但这是完整替换，不存在混用问题
- `G2C_LoginResponse` 的 MemoryPack 版本比 protobuf 版本多一个 `errorCode` 字段，不影响现有消费逻辑
