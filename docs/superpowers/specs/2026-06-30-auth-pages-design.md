# 登录/注册页面设计与实现规格

## 概述

为 Battle of Cell 游戏客户端添加两个认证页面（登录 / 注册），使用 shadcn/ui + React Hook Form + Zod 方案。本次不实现真实 API 调用，只完成到验证通过后构建请求 payload 这一步。

## 技术栈

| 技术 | 用途 |
|---|---|
| `react-router-dom` | 客户端路由 |
| `tailwindcss` + `postcss` + `autoprefixer` | CSS 工具框架 |
| `shadcn/ui` (Radix UI 封装) | UI 组件 |
| `react-hook-form` + `@hookform/resolvers` + `zod` | 表单状态管理 + 验证 |

## 路由设计

| 路径 | 组件 | 说明 |
|---|---|---|
| `/` | `GameWindow` | 已有游戏页面 |
| `/login` | `LoginPage` | 登录页 |
| `/register` | `RegisterPage` | 注册页 |

`main.tsx` 用 `<BrowserRouter>` 包裹，`App.tsx` 使用 `<Routes>/<Route>` 分发。

## 目录结构新增

```
src/
├── components/
│   └── AuthLayout.tsx
├── pages/
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── schemas/
│   └── auth.ts
├── types/
│   └── auth.ts
├── lib/
│   └── utils.ts              # shadcn 通用
└── components/ui/
    ├── button.tsx             # shadcn 生成
    ├── card.tsx
    ├── form.tsx
    ├── input.tsx
    └── label.tsx
```

## 组件设计

### AuthLayout

居中卡片布局，承接收 `title` 和 `subtitle` props，所有认证页共用。

### LoginPage

- 字段：`username`（必填，3-20 字符）、`password`（必填，6-32 字符）
- 底部链接："没有账号？去注册" → `/register`

### RegisterPage

- 字段：`username`（必填，3-20 字符）、`email`（必填，合法邮箱格式）、`password`（必填，6-32 字符）、`confirmPassword`（必填，与 password 一致）
- 底部链接："已有账号？去登录" → `/login`

## 验证与数据流

```
用户输入 → RHF onChange/onBlur 字段级校验
    ↓
点击提交 → RHF trigger 全量校验
    ↓
Zod schema 验证 → 失败 → FormMessage 显示字段错误
    ↓
              成功 → onValid(data) 回调
                      ↓
              构建类型化 Request Payload
                      ↓
              console.log / placeholder API call
```

### Zod Schema

```typescript
// LoginSchema
z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(32),
})

// RegisterSchema
z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(32),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "两次密码不一致",
  path: ["confirmPassword"],
})
```

### Request 类型

```typescript
type LoginRequest = { username: string; password: string }
type RegisterRequest = { username: string; email: string; password: string }
```

### API 调用占位

在页面组件中用一个独立函数（如 `placeholderLogin` / `placeholderRegister`）接收构建好的 request payload，当前仅 `console.log`。后续接入真实 API 时只需替换此函数。

## 样式方案

- 保持游戏深色主题，`AuthLayout` 居中垂直 + 水平居中
- Card 内嵌表单，背景色 `bg-slate-900`，卡内用 shadcn 组件
- 页面背景继承全局暗色（`#1a1a2e`）
- Footer 链接切换到另一个认证页

## 安装步骤

1. 安装 Tailwind CSS 及相关
2. 初始化 shadcn/ui
3. 安装 react-router-dom
4. 安装 react-hook-form、@hookform/resolvers、zod
5. 生成 shadcn 组件（button、card、form、input、label）
6. 配置 Tailwind 主题色

## 实现顺序

1. 安装所有依赖并完成配置
2. 创建 `types/auth.ts` — 类型定义
3. 创建 `schemas/auth.ts` — Zod schema
4. 创建 `components/AuthLayout.tsx` — 共享布局
5. 创建 `pages/LoginPage.tsx` — 登录页
6. 创建 `pages/RegisterPage.tsx` — 注册页
7. 更新 `main.tsx` + `App.tsx` — 接入路由
8. 清理可删除的初始文件（App.css）
