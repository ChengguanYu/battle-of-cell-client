# 认证接口文档

> 基础路径：`api/v1/auth`

---

## 1. 用户注册

### POST `api/v1/auth/register`

注册新用户账号。

### Request

```json
{
    "username": "testuser",
    "email": "user@example.com",
    "password": "password123"
}
```

#### 字段说明

| 字段 | 类型 | 必填 | 验证规则 |
|------|------|------|----------|
| username | string | 是 | 长度 4-64 字符 |
| email | string | 是 | 合法的 email 格式 |
| password | string | 是 | 长度 8-256 字符 |

### Response

#### 注册成功

- **HTTP Status:** `200 OK`

```json
{
    "code": 0,
    "message": "注册成功"
}
```

#### 请求参数校验失败

- **HTTP Status:** `400 Bad Request`

ASP.NET Core `[ApiController]` 自动校验请求参数，校验失败时返回默认 ModelState 错误格式，不会进入业务逻辑。触发条件：缺少必填字段、字段长度不符合规则、邮箱格式不合法。

```json
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "errors": {
        "Password": ["密码长度必须在 8 到 256 个字符之间"],
        "Email": ["Invalid email format"]
    }
}
```

#### 邮箱已被注册

- **HTTP Status:** `400 Bad Request`

```json
{
    "code": 0,
    "message": "该邮箱已被注册"
}
```

#### 服务端异常

- **HTTP Status:** `500 Internal Server Error`

数据库写入失败或其他未预期异常。

### 服务端处理流程

1. 校验请求参数（ASP.NET 自动校验 `[Required]`、`[StringLength]`、`[EmailAddress]`）
2. 通过 `UserDao.FindByEmail(email)` 检查邮箱是否已存在
3. 若已存在，返回错误
4. 生成 UUID（通过 `IdGenerator.CreateUuid()`）和随机盐值（16 字节 Base64）
5. 使用 **PBKDF2-SHA256**（100,000 迭代、32 字节输出）对密码加盐哈希
6. 写入 `users` 表
7. 返回成功

---

## 2. 用户登录

### POST `api/v1/auth/login`

用户登录，获取 JWT Token。

### Request

```json
{
    "account": "user@example.com",
    "password": "password123"
}
```

#### 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| account | string | 是 | 支持用户 ID（长整型）或邮箱两种登录方式 |
| password | string | 是 | 长度 8-256 字符 |

### Response

#### 登录成功

- **HTTP Status:** `200 OK`

```json
{
    "code": 0,
    "message": "登录成功",
    "extra": {
        "token": "eyJhbGciOiJIUzI1NiIs...",
        "user": {
            "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "testuser",
            "email": "user@example.com",
            "createdAt": "2026-07-03T12:00:00Z"
        }
    }
}
```

#### 请求参数校验失败

- **HTTP Status:** `400 Bad Request`

触发条件：缺少 `account` 或 `password`、密码长度不在 8-256 范围。

```json
{
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "errors": {
        "Account": ["账号不能为空"],
        "Password": ["密码长度必须在 8 到 256 个字符之间"]
    }
}
```

#### 账号不存在

- **HTTP Status:** `400 Bad Request`

```json
{
    "code": 1001,
    "message": "账号不存在"
}
```

#### 密码错误

- **HTTP Status:** `400 Bad Request`

```json
{
    "code": 1002,
    "message": "密码错误"
}
```

### 服务端处理流程

1. 校验请求参数
2. 判断 `account` 类型：
   - 若能解析为 `long`，视为 **用户 ID**，通过 `UserDao.FindById(id)` 查询
   - 否则视为 **邮箱**，通过 `UserDao.FindByEmail(email)` 查询
3. 若用户不存在，返回 `AccountNotFound`
4. 取用户存储的盐值，对输入密码做 PBKDF2-SHA256 哈希，与数据库密码哈希比对
5. 若密码不匹配，返回 `InvalidPassword`
6. 使用 **HMAC-SHA256** 签发 JWT Token（24 小时有效期），携带用户 ID
7. 返回 Token 及用户信息

---

## 3. 响应码定义

| Code | 含义 |
|------|------|
| 0 | 成功 |
| 1001 | 账号不存在 |
| 1002 | 密码错误 |

---

## 4. 数据模型

### `users` 表

| 字段 | 类型 | 说明 |
|------|------|------|
| s_user_id | bigint (PK, auto-increment) | 用户 ID |
| uuid | guid | 全局唯一标识 |
| email | string(256) | 邮箱 |
| username | string(64) | 用户名 |
| password_hash | string(256) | PBKDF2-SHA256 密码哈希 |
| salt | string(256) | 盐值（16 字节 Base64） |
| created_at | datetime | 创建时间 |
| last_login_at | datetime? | 最后登录时间 |
| is_deleted | bool | 软删除标记 |

---

## 5. 环境依赖

| 变量 | 说明 |
|------|------|
| `JWT_SECRET` | JWT 签名密钥（必填，缺失时服务启动失败） |
| `MACHINE_ID` | 服务器机器 ID，用于 UUID 生成 |
