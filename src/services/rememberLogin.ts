/** localStorage key for remembered login credentials */
const STORAGE_KEY = "boc_remember_login"
const SKIP_AUTO_LOGIN_KEY = "boc_skip_auto_login"

export interface RememberedLogin {
  account: string
  password: string
}

export function loadRememberedLogin(): RememberedLogin | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<RememberedLogin>
    if (
      typeof parsed.account === "string" &&
      parsed.account.length > 0 &&
      typeof parsed.password === "string" &&
      parsed.password.length > 0
    ) {
      return { account: parsed.account, password: parsed.password }
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
  }
  return null
}

export function saveRememberedLogin(account: string, password: string): void {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ account, password } satisfies RememberedLogin),
  )
}

export function clearRememberedLogin(): void {
  localStorage.removeItem(STORAGE_KEY)
}

/** After explicit logout, skip one auto-login attempt on the login page. */
export function markSkipAutoLogin(): void {
  sessionStorage.setItem(SKIP_AUTO_LOGIN_KEY, "1")
}

export function consumeSkipAutoLogin(): boolean {
  const skip = sessionStorage.getItem(SKIP_AUTO_LOGIN_KEY) === "1"
  if (skip) {
    sessionStorage.removeItem(SKIP_AUTO_LOGIN_KEY)
  }
  return skip
}
