# Auth Pages (Login / Register) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/login` and `/register` routes with shadcn/ui forms, Zod validation, and request payload construction (no actual API calls).

**Architecture:** Install shadcn/ui + react-router-dom + React Hook Form + Zod. Create shared `AuthLayout`, two page components, typed request schemas, and wire routing in `App.tsx`. Validation sits between form submission and API call — on valid, build typed payload and log it.

**Tech Stack:** React 19, TypeScript 6.0, Vite 8, react-router-dom v7, Tailwind CSS v3, shadcn/ui, react-hook-form v7, zod v3

## Global Constraints

- TypeScript 6.0 `erasableSyntaxOnly` — no `enum`, no `namespace`, use `import type` for type-only imports
- `verbatimModuleSyntax` — must use `import type { X }` syntax for type-only imports
- `noUnusedLocals` + `noUnusedParameters` — no dead code allowed
- React 19 — use `React 19` compatible versions of all dependencies
- Vite 8 — no Webpack config needed
- Node.js: >=18 (Vite 8 requirement)

---
### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Interfaces:**
- Consumes: nothing
- Produces: all packages available for import

- [ ] **Step 1: Install Tailwind CSS v3 and PostCSS**

```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

- [ ] **Step 2: Install react-router-dom**

```bash
npm install react-router-dom
```

- [ ] **Step 3: Install form libraries**

```bash
npm install react-hook-form @hookform/resolvers zod
```

- [ ] **Step 4: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```

Use `-d` (defaults) — accepts all defaults including `src/components/ui` path, `cn` utility in `src/lib/utils.ts`, Tailwind config, CSS variables, etc.

- [ ] **Step 5: Add required shadcn components**

```bash
npx shadcn@latest add button form input card label
```

- [ ] **Step 6: Verify install**

```bash
npm ls react-router-dom react-hook-form zod tailwindcss
```

Expected: all show up with version numbers, no missing peer warnings.

---

### Task 2: Configure Tailwind & Global Styles

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/index.css`

**Interfaces:**
- Produces: Tailwind utility classes available in all components, global dark theme styles

- [ ] **Step 1: Create `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 2: Create `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 3: Update `src/index.css`** — replace current content with Tailwind directives + base dark theme

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  width: 100%;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
}
```

- [ ] **Step 4: Add `dark` class to `index.html`** so shadcn components use dark theme

```html
<html lang="zh-CN" class="dark">
```

- [ ] **Step 5: Verify Tailwind works**

Run: `npm run dev`
Expected: Vite dev server starts without errors. (Can stop after confirming.)

---

### Task 3: Define Auth Types and Zod Schemas

**Files:**
- Create: `src/types/auth.ts`
- Create: `src/schemas/auth.ts`

**Interfaces:**
- Consumes: nothing
- Produces: `LoginRequest`, `RegisterRequest` types; `loginSchema`, `registerSchema` Zod schemas

- [ ] **Step 1: Create `src/types/auth.ts`**

```typescript
export interface LoginRequest {
  username: string
  password: string
}

export interface RegisterRequest {
  username: string
  email: string
  password: string
}
```

- [ ] **Step 2: Create `src/schemas/auth.ts`**

```typescript
import { z } from "zod"

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "用户名至少 3 个字符")
    .max(20, "用户名最多 20 个字符"),
  password: z
    .string()
    .min(6, "密码至少 6 个字符")
    .max(32, "密码最多 32 个字符"),
})

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "用户名至少 3 个字符")
      .max(20, "用户名最多 20 个字符"),
    email: z.string().email("请输入有效的邮箱地址"),
    password: z
      .string()
      .min(6, "密码至少 6 个字符")
      .max(32, "密码最多 32 个字符"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "两次密码不一致",
    path: ["confirmPassword"],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
```

---

### Task 4: Create AuthLayout Component

**Files:**
- Create: `src/components/AuthLayout.tsx`

**Interfaces:**
- Consumes: `title: string`, `subtitle?: string`, `children: React.ReactNode`
- Produces: centered card wrapper for auth forms

- [ ] **Step 1: Create `src/components/AuthLayout.tsx`**

```tsx
import type { ReactNode } from "react"

interface AuthLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1a1a2e] p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg border border-slate-700 bg-slate-900 p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}
```

---

### Task 5: Create LoginPage

**Files:**
- Create: `src/pages/LoginPage.tsx`

**Interfaces:**
- Consumes: `loginSchema`, `LoginFormData`, `AuthLayout`, shadcn form components (`useForm`, `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage`, `Input`, `Button`, `Card`, `CardContent`, `CardHeader`, `CardTitle`, `CardDescription`), `Link` from react-router-dom
- Produces: `<LoginPage />` component with validated form → builds `LoginRequest` and logs it

- [ ] **Step 1: Create `src/pages/LoginPage.tsx`**

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"

import type { LoginRequest } from "../types/auth"
import { loginSchema, type LoginFormData } from "../schemas/auth"
import { AuthLayout } from "../components/AuthLayout"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

function buildLoginRequest(data: LoginFormData): LoginRequest {
  return {
    username: data.username,
    password: data.password,
  }
}

function placeholderLogin(req: LoginRequest) {
  // TODO: 替换为真实 API 调用
  console.log("Login request payload:", req)
}

export function LoginPage() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(data: LoginFormData) {
    const request = buildLoginRequest(data)
    placeholderLogin(request)
  }

  return (
    <AuthLayout title="登录" subtitle="欢迎回到 Battle of Cell">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input placeholder="请输入用户名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="请输入密码"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            登录
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-center text-sm text-slate-400">
        没有账号？{" "}
        <Link
          to="/register"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          去注册
        </Link>
      </p>
    </AuthLayout>
  )
}
```

---

### Task 6: Create RegisterPage

**Files:**
- Create: `src/pages/RegisterPage.tsx`

**Interfaces:**
- Consumes: `registerSchema`, `RegisterFormData`, `AuthLayout`, shadcn form components, `Link`
- Produces: `<RegisterPage />` component with validated form → builds `RegisterRequest` and logs it

- [ ] **Step 1: Create `src/pages/RegisterPage.tsx`**

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"

import type { RegisterRequest } from "../types/auth"
import { registerSchema, type RegisterFormData } from "../schemas/auth"
import { AuthLayout } from "../components/AuthLayout"
import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"

function buildRegisterRequest(data: RegisterFormData): RegisterRequest {
  return {
    username: data.username,
    email: data.email,
    password: data.password,
  }
}

function placeholderRegister(req: RegisterRequest) {
  // TODO: 替换为真实 API 调用
  console.log("Register request payload:", req)
}

export function RegisterPage() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: RegisterFormData) {
    const request = buildRegisterRequest(data)
    placeholderRegister(request)
  }

  return (
    <AuthLayout title="注册" subtitle="创建您的 Battle of Cell 账号">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>用户名</FormLabel>
                <FormControl>
                  <Input placeholder="请输入用户名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>邮箱</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="请输入邮箱"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密码</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="请输入密码"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>确认密码</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="请再次输入密码"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            注册
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-center text-sm text-slate-400">
        已有账号？{" "}
        <Link
          to="/login"
          className="font-medium text-blue-400 hover:text-blue-300"
        >
          去登录
        </Link>
      </p>
    </AuthLayout>
  )
}
```

---

### Task 7: Wire Up Routing

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Delete: `src/App.css` (no longer needed)

**Interfaces:**
- Consumes: `LoginPage`, `RegisterPage`, `GameWindow` (existing)
- Produces: working SPA routing at `/`, `/login`, `/register`

- [ ] **Step 1: Update `src/main.tsx`** to wrap with `BrowserRouter`

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

- [ ] **Step 2: Update `src/App.tsx`** to use routes

```tsx
import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"

function GameWindow() {
  return (
    <div className="game-window">
      {/* 游戏内容将渲染在此 */}
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameWindow />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
```

- [ ] **Step 3: Delete `src/App.css`** (routes are now managed via Tailwind + component styles)

```bash
rm "src/App.css"
```

---

### Task 8: Build Verification

- [ ] **Step 1: Run dev server and check all routes**

```bash
npm run dev
```

Expected: No build errors. Visit:
- `http://localhost:5173/` — game window renders
- `http://localhost:5173/login` — login form renders
- `http://localhost:5173/register` — register form renders

- [ ] **Step 2: Test validation on login page**
  1. Click "登录" with empty fields → error messages appear below each field
  2. Enter username "ab" → field error "用户名至少 3 个字符"
  3. Enter valid username and password → submit logs `LoginRequest` to console

- [ ] **Step 3: Test validation on register page**
  1. Click "注册" with empty fields → all 4 field errors appear
  2. Enter mismatched passwords → error "两次密码不一致" on confirm field
  3. Enter invalid email → error "请输入有效的邮箱地址"
  4. Enter all valid data → submit logs `RegisterRequest` to console

- [ ] **Step 4: Test navigation between pages**
  1. On login page, click "去注册" → navigates to `/register`
  2. On register page, click "去登录" → navigates to `/login`
  3. Direct URL input `/login` and `/register` work correctly

- [ ] **Step 5: Run TypeScript type check**

```bash
npx tsc -b --noEmit
```

Expected: No type errors.
