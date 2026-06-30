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
