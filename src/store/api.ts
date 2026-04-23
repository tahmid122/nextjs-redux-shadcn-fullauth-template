/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { logout } from "./features/auth/authSlice";
import { RootState } from "./hooks";
import { BASEAPI } from "@/utils/baseApi";
// 🔹 Base Query
const baseQuery = fetchBaseQuery({
  baseUrl: BASEAPI(),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// 🔹 Base Query with Refresh Token
const baseQueryWithTokenRefresh = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401 || result.error?.status === 403) {
    api.dispatch(logout());
    return result;
  }

  return result;
};

// 🔹 Base API
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithTokenRefresh,
  tagTypes: ["auth", "Auth"],
  endpoints: () => ({}),
});
