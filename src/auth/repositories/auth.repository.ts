import axios from "axios";
import { AuthResponseDto, LoginDto } from "../types/auth.types";

const BASE_URL = "https://xgp-photo-api.onrender.com/api";

export async function loginApi(dto: LoginDto): Promise<AuthResponseDto> {
  const response = await axios.post<AuthResponseDto>(
    `${BASE_URL}/Auth/login`,
    dto
  );
  return response.data;
}
