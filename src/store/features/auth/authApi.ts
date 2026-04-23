import { baseApi } from "@/store/api";
import { T_ApiResponse } from "@/types";
import {
  TForgotPasswordOtpResponse,
  TLoginResponse,
  TSignUp,
} from "@/types/auth/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<
      T_ApiResponse<{ message: string; otp: string }>,
      TSignUp
    >({
      query: (info) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    verifyRegisterOtp: builder.mutation<
      T_ApiResponse<void>,
      { email: string; code: string }
    >({
      query: (info) => {
        return {
          url: "/auth/verify-email",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    resendVerificationEmail: builder.mutation<
      T_ApiResponse<{ message: string }>,
      string
    >({
      query: (email) => {
        return {
          url: "/auth/resend-verification-email",
          method: "POST",
          body: { email },
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    login: builder.mutation<
      T_ApiResponse<TLoginResponse>,
      { email: string; password: string }
    >({
      query: (info) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    forgotPassword: builder.mutation<T_ApiResponse<void>, { email: string }>({
      query: (email) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: email,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    verifyForgotPasswordOtp: builder.mutation<
      T_ApiResponse<TForgotPasswordOtpResponse>,
      { email: string; code: string }
    >({
      query: (info) => {
        return {
          url: "/auth/verify-reset-otp",
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
    createNewPassword: builder.mutation<
      T_ApiResponse<void>,
      { token: string; password: string }
    >({
      query: (info) => {
        return {
          url: "/auth/reset-password",
          method: "PATCH",
          body: info,
        };
      },
      invalidatesTags: ["auth", "Auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyRegisterOtpMutation,
  useResendVerificationEmailMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyForgotPasswordOtpMutation,
  useCreateNewPasswordMutation,
} = authApi;
