const isDev = process.env.NODE_ENV === "development";

export const getEnv = (
  devKey: string,
  prodKey: string,
  name: string,
): string => {
  const value = isDev
    ? process.env.NEXT_PUBLIC_BASEURL_DEV
    : process.env.NEXT_PUBLIC_BASEURL_PROD;
  if (!value) {
    console.warn(
      `⚠ ${name} is not defined in environment variables, using fallback`,
    );
    return "";
  }
  return value;
};

export const BASEAPI = (): string =>
  getEnv("NEXT_PUBLIC_BASEURL_DEV", "NEXT_PUBLIC_BASEURL_PROD", "Base API URL");

export const CLIENT_URL = (): string =>
  getEnv(
    "NEXT_PUBLIC_CLIENT_URL_DEV",
    "NEXT_PUBLIC_CLIENT_URL_PROD",
    "Client Public URL",
  );
