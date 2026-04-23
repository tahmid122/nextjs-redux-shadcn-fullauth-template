import { Role } from "./common";

export interface TSignUp {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  agreedToTerms: boolean;
}

export interface TLogin {
  email: string;
  password: string;
}
export interface TLoginResponse {
  user: TUser;
  tokens: TAccessToken;
}
export interface TUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}
export interface TAccessToken {
  accessToken: string;
  refreshToken: string;
}

export interface OTPResponse {
  id: string;
  expiresAt: string;
  code: string;
}
export interface TForgotPasswordOtpResponse {
  resetToken: string;
}
