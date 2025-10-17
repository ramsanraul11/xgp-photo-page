import { loginApi } from "../repositories/auth.repository";
import type { LoginDto } from "../types/auth.types";

//TODO: Wrapper respuestas
export async function loginApiAsync(dto: LoginDto): Promise<string> {
  try {
    // 🔹 Llamada al repositorio
    const result = await loginApi(dto);

    // 🔹 Validación mínima
    if (!result || !result.token) {
      return '';
    }

    return result.token;
  } catch (error: any) {
    console.error("❌ Error en loginApiAsync:", error);
    if (error.response?.status === 401) {
      return '';
    }
    return '';
  }
}
