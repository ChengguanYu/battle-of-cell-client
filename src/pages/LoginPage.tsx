import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { loginSchema, type LoginFormData } from "../schemas/auth"
import { useAuth } from "../hooks/AuthContext"
import { AuthLayout } from "../components/AuthLayout"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  clearRememberedLogin,
  consumeSkipAutoLogin,
  loadRememberedLogin,
  saveRememberedLogin,
} from "../services/rememberLogin"

/** Guard across StrictMode remounts in the same page visit. */
let autoLoginAttempted = false

export function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const remembered = useMemo(() => loadRememberedLogin(), [])
  const [rememberPassword, setRememberPassword] = useState(remembered != null)
  const [isAutoLogging, setIsAutoLogging] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      account: remembered?.account ?? "",
      password: remembered?.password ?? "",
    },
  })

  const { isSubmitting } = form.formState
  const busy = isSubmitting || isAutoLogging

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true })
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    if (autoLoginAttempted || isAuthenticated) return
    if (consumeSkipAutoLogin()) {
      autoLoginAttempted = true
      return
    }
    if (!remembered) return

    autoLoginAttempted = true
    setIsAutoLogging(true)
    void (async () => {
      try {
        await login(remembered.account, remembered.password)
        toast.success("自动登录成功")
      } catch (e) {
        // Credentials may be stale; keep form filled so user can retry/edit.
        toast.error(e instanceof Error ? e.message : "自动登录失败")
      } finally {
        setIsAutoLogging(false)
      }
    })()
  }, [isAuthenticated, login, remembered])

  async function onSubmit(data: LoginFormData) {
    try {
      await login(data.account, data.password)
      if (rememberPassword) {
        saveRememberedLogin(data.account, data.password)
      } else {
        clearRememberedLogin()
      }
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
                  <Input
                    placeholder="请输入邮箱或账号"
                    disabled={busy}
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
                    disabled={busy}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember-password"
              checked={rememberPassword}
              onCheckedChange={(checked) =>
                setRememberPassword(checked === true)
              }
              disabled={busy}
            />
            <Label
              htmlFor="remember-password"
              className="cursor-pointer font-normal text-muted-foreground"
            >
              记住密码
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? "登录中..." : "登录"}
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
