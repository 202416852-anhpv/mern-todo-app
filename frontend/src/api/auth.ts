import axios from "axios";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL.replace("/api/todos", "") + "/api/auth",
});

export const googleLogin = async (credential: string) => {
  const { data } = await authApi.post<{ token: string }>("/google", { credential });
  return data;
};
