import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import type { RegisterRequest } from "../types/auth"
import { registerSchema, type RegisterFormData } from "../schemas/auth"
import { useAuth } from "../hooks/AuthContext"
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

export function RegisterPage() {
  const navigate = useNavigate()
  const { register: registerUser } = useAuth()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: RegisterFormData) {
    try {
      const request = buildRegisterRequest(data)
      await registerUser(request)
      toast.success("注册成功")
      navigate("/login", { replace: true })
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "注册失败")
    }
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
