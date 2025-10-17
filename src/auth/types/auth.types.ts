export interface LoginDto {
  email: string;
  password: string;
  clientId: string;
  clientSecret: string;
}

export interface AuthResponseDto {
  token: string;
}
