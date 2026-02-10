type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type HttpQuery = Record<string, string | number | boolean | undefined>;

type HttpHeaders = Record<string, string>;

type HttpRequest = {
  url: string;
  method?: HttpMethod;
  headers?: HttpHeaders;
  query?: HttpQuery;
  body?: unknown;
  signal?: AbortSignal;
};

type HttpResponse<T> = {
  data: T;
  status: number;
  headers: Headers;
};

export type { HttpMethod, HttpQuery, HttpHeaders, HttpRequest, HttpResponse };
