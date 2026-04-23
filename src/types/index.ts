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
  value: boolean | React.Key;
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
  totalPage: number;
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

export type T_ApiResponseMeta = {
  totalCount: number;
  totalPages: number;
  page: number;
  limit: number;
};
export type T_ApiResponseForPagination<T> = {
  success: boolean;
  message: string;
  data: {
    meta: T_ApiResponseMeta;
    result: T;
  };
};

export type T_ErrorSource = {
  path: string;
  message: string;
};
export interface RtkErrorWrapper {
  status: number;
  data: ApiErrorResponse;
}
export interface ApiErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  requestPath: string;
  requestMethod: string;
  requestBody: RequestBody;
  errorDetails: ErrorDetails;
}
export interface ErrorDetails {
  stack?: string;
}
export interface RequestBody {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Generic for other forms
}
export interface I_ErrorResponse {
  data: {
    success: boolean;
    message: string;
    stack?: string;
    errorSources: T_ErrorSource[];
  };
  status: number;
}
