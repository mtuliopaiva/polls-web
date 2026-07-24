import { apiClient } from "@/lib/api/client";
import { tokenStorage } from "@/lib/api/token";

import type { AuthUser, LoginInput, LoginResponse } from "../types";

export async function login(input: LoginInput): Promise<LoginResponse> {
  const { data } = await apiClient.post<LoginResponse>("/auth/login", input);

  tokenStorage.set(data.accessToken);

  return data;
}

export async function logout(): Promise<void> {
  try {
    await apiClient.post("/auth/logout");
  } finally {
    tokenStorage.clear();
  }
}

export async function fetchMe(): Promise<AuthUser> {
  const { data } = await apiClient.get<AuthUser>("/auth/me");

  return data;
}

