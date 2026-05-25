export type T_Login = {
  _id: string;
  name: string;
  accessToken: string;
  photos: { thumbnail: string; cover: string };
  category: string;
  quantity: number;
  price: number;
  stock: number;
  discount: number;
  isDeleted: boolean;
  ratings: number[];
  createdAt: Date;
  updatedAt: Date;
};

export type TQueryParam = {
  name: string;
  value: string | null | number | undefined;
};
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type T_ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
