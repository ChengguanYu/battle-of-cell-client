export interface ApiResponse<T = undefined> {
  code: number
  message: string
  extra?: T
}

export interface LoginResponseData {
  token: string
  user: {
    uuid: string
    username: string
    email: string
    createdAt: string
  }
}
