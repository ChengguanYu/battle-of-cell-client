# AGENTS.md — Battle of Cell 客户端
本仓库是 Battle of Cell 的前端客户端（React + TypeScript + Vite），配合自研的 protobuf 子模块与服务端通信。下面是几条硬约束，干活前先对齐。

## 1. 客户端项目边界

这是**纯客户端仓库**。`src/` 之外的服务端代码（`game_server/` 下的 `BattleOfCellServer`、`Fantasy` 等）一律视为只读的参考来源，不得直接读取、修改、提交。

- 默认只在 `C:\Users\Administrator\Desktop\battle_of_cell\client` 范围内工作。
- 除非用户**明确提到要改服务端**（如「服务端也改一下」「改一下 handler」），否则：
  - 不读取服务端源码作为工作对象；
  - 不编辑、不提交服务端文件；
  - 不在回答里主动建议或执行服务端逻辑改动。
- 确实需要引用服务端做对照时（如同步协议、确认字段语义），只读不改，且在说明里点明「仅参考」。

## 2. 导出协议（OpCode）同步

`src/proto/OpCode.ts` 是从服务端生成的 `OuterOpcode.cs` 镜像过来的 TypeScript 常量表，必须与服务端保持字段与数值一一对应。参考来源是 `game_server/BattleOfCellServer/Server/Entity/Generate/NetworkProtocol/OuterOpcode.cs`（服务端导出物，只读）。

当用户提到 `更新导出协议`、`更新opcode`、`同步协议号` 等含义的操作时，按以下流程：

1. 读取服务端最新 `OuterOpcode.cs`，提取 `OuterOpcode` 中所有 `public const uint` 条目。
2. 与 `src/proto/OpCode.ts` 现有内容比对，找出新增/变更/删除项。
3. 用与现有文件一致的格式更新 `src/proto/OpCode.ts`：
   - 保持 `export const OpCode = { ... } as const` 结构；
   - 字段名按 C# 原名直译，数值完全一致；
   - 末尾保留 `export type OpCode = (typeof OpCode)[keyof typeof OpCode]` 联合类型。
4. 如果 proto 子模块（`src/proto/battle-of-cell-proto`）指针也变了，连同 `OpCode.ts` 一起 staged，并在提交里带上子模块指针变更。
5. 提交信息风格：`chore(proto): sync OpCode with OuterOpcode ...`，有子模块指针时追加 `update proto submodule pointer`。

## 3. 构建与脚本

- `npm run dev` 会先跑 `proto:build` 再起 Vite，改完 `.proto` 后优先用它确认编译链通。
- `npm run proto:build` 用 `protobufjs-cli` 重新生成 `src/proto/bundle.js` 与 `bundle.d.ts`；手改 OpCode 不会动 bundle，但改 `.proto` 后必须重跑。
- `npm run build` 走完整 `tsc -b && vite build`，提交前用它在本地验证一遍类型与产物。

## 4. 其他约定

- 协议相关的 TS bundle（`src/proto/bundle.js`、`bundle.d.ts`）由 `proto:build` 生成，不要手动编辑。
- `src/proto/battle-of-cell-proto` 是子模块，指向 `https://github.com/ChengguanYu/battle-of-cell-proto.git`，子模块内的提交在子仓库里完成后，再到本父仓库更新指针。
- 不动服务端、不自动 `git push`，除非用户明确要求。
