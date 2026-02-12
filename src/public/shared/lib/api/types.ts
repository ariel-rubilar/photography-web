type SuccessResponse<T, M = undefined> = {
  data: T;
  meta: M;
};

type Error = {
  code: string;
  message: string;
};

type ErrorResponse = {
  error: Error;
};

export type { SuccessResponse, ErrorResponse, Error };
