import axios from "axios"
import type { ApiResponse } from "../types/api"

export class ApiError extends Error {
  code: number
  constructor(code: number, message: string) {
    super(message)
    this.code = code
    this.name = "ApiError"
  }
}

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
})

httpClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

httpClient.interceptors.response.use(
  (response) => {
    const data = response.data as ApiResponse
    if (data.code !== 0) {
      throw new ApiError(data.code, data.message)
    }
    return response
  },
  (error) => {
    if (error instanceof ApiError) {
      throw error
    }
    const message =
      error.response?.data?.message ?? error.message ?? "网络错误"
    throw new ApiError(error.response?.data?.code ?? -1, message)
  },
)
