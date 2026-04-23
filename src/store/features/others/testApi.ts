import { baseApi } from "@/store/api";

const testApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTest: build.query<any, void>({
      query: () => `/posts/1`,
    }),
  }),
});

export const { useGetTestQuery } = testApi;
