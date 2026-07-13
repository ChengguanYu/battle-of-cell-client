import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { loginSchema, type LoginFormData } from "../schemas/auth"
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

export function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      account: "",
      password: "",
    },
  })

  const { isSubmitting } = form.formState

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true })
    }
  }, [isAuthenticated, navigate])

  async function onSubmit(data: LoginFormData) {
    try {
      await login(data.account, data.password)
      toast.success("登录成功")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "登录失败")
    }
  }

  return (
    <AuthLayout title="登录" subtitle="欢迎回到 Battle of Cell">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem>
                <FormLabel>邮箱 / 账号</FormLabel>
                <FormControl>
                  <Input placeholder="请输入邮箱或账号" {...field} />
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
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "登录中..." : "登录"}
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
