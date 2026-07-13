# Protobuf → MemoryPack 协议迁移实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将客户端的消息序列化从 protobuf 切换到 MemoryPack，删除所有 protobuf 相关代码和依赖

**Architecture:** 直接替换 AuthContext.tsx 中的 2 处 protobuf 调用（encode/decode）为 MemoryPack 的 serialize/deserialize，然后清理 protobuf 文件和 npm 依赖。Message 定义已通过 `ts-protocol/` 中的 MemoryPack 代码提供。

**Tech Stack:** TypeScript, MemoryPack (自定义序列化), protobufjs (待移除)

## Global Constraints

- 只保留 `src/ts-protocol/` 中的 MemoryPack 逻辑
- 修改后必须能通过 TypeScript 编译 (`npx tsc --noEmit`)
- 不改变运行时行为，仅替换序列化格式
- 使用 `C2G_LoginRequest.serialize()` 替代 protobuf 的 `.encode().finish()`
- 使用 `G2C_LoginResponse.deserialize()` 替代 protobuf 的 `.decode()`

---

### Task 1: 修改 AuthContext.tsx 的序列化逻辑

**Files:**
- Modify: `src/hooks/AuthContext.tsx:14,62-67,77-79`
- Test: `npx tsc --noEmit`

**Interfaces:**
- Consumes: `C2G_LoginRequest` (from `src/ts-protocol/C2G_LoginRequest`), `G2C_LoginResponse` (from `src/ts-protocol/G2C_LoginResponse`)
- Produces: AuthContext.tsx 不再引用 protobuf bundle

- [ ] **Step 1: 替换 import**

在 `src/hooks/AuthContext.tsx` 中：
- 移除 `import { Fantasy } from "../proto/bundle"`
- 新增：
```typescript
import { C2G_LoginRequest } from "../ts-protocol/C2G_LoginRequest"
import { G2C_LoginResponse } from "../ts-protocol/G2C_LoginResponse"
```

- [ ] **Step 2: 替换 encode 调用**

将第 62-67 行的 protobuf encode 代码：
```typescript
    const reqBody = Fantasy.Network.Message.C2G_LoginRequest.encode(
      Fantasy.Network.Message.C2G_LoginRequest.create({
        Account: account,
        Password: password,
      }),
    ).finish()
```

替换为：
```typescript
    const req = new C2G_LoginRequest()
    req.account = account
    req.password = password
    const reqBody = C2G_LoginRequest.serialize(req)
```

- [ ] **Step 3: 替换 decode 调用**

将第 77-79 行的 protobuf decode 代码：
```typescript
    const loginResp = Fantasy.Network.Message.G2C_LoginResponse.decode(
      new Uint8Array(respBuffer),
    )
```

替换为：
```typescript
    const loginResp = G2C_LoginResponse.deserialize(respBuffer)
```

- [ ] **Step 4: 验证 TypeScript 编译**

```bash
npx tsc --noEmit
```
预期：无报错

---

### Task 2: 删除 protobuf 相关文件

**Files:**
- Delete: `src/proto/OuterMessage.proto`
- Delete: `src/proto/bundle.js`
- Delete: `src/proto/bundle.d.ts`

- [ ] **Step 1: 删除 proto 目录**

```bash
rm -rf src/proto
```

- [ ] **Step 2: 验证没有残留引用**

```bash
grep -r "proto/bundle\|protobuf" src/ --include="*.ts" --include="*.tsx" --include="*.js"
```
预期：无匹配结果

---

### Task 3: 清理 package.json 依赖

**Files:**
- Modify: `package.json`
- Run: `npm install`

- [ ] **Step 1: 从 package.json 移除 protobuf 依赖**

在 `package.json` 的 `dependencies` 中移除 `"protobufjs": "^8.6.5"`，在 `devDependencies` 中移除 `"protobufjs-cli": "^2.5.6"`。

- [ ] **Step 2: 清理 package-lock.json**

```bash
npm install
```
预期：`protobufjs`、`protobufjs-cli`、`long` 等依赖从 `package-lock.json` 中移除，`node_modules` 中相关目录被清理。

- [ ] **Step 3: 最终验证**

```bash
npx tsc --noEmit
```
预期：编译通过，无 protobuf 相关错误
