import { httpClient } from "./http"
import type { ApiResponse, LoginResponseData } from "../types/api"
import type { RegisterRequest } from "../types/auth"

export const authApi = {
  async login(
    account: string,
    password: string,
  ): Promise<LoginResponseData> {
    const response = await httpClient.post<ApiResponse<LoginResponseData>>(
      "api/v1/auth/login",
      { account, password },
    )
    return response.data.extra!
  },

  async register(data: RegisterRequest): Promise<void> {
    await httpClient.post<ApiResponse>("api/v1/auth/register", data)
  },
}
