import { HttpRequest, HttpResponse } from "./types";

type HttpRequestFn = <T>(req: HttpRequest) => Promise<HttpResponse<T>>;

export { type HttpRequestFn };
