import { HttpError } from "./error";
import { HttpRequestFn } from "./request";
import { HttpRequest, HttpResponse } from "./types";

const request: HttpRequestFn = async <T>({
  url,
  method = "GET",
  headers = {},
  query,
  body,
  signal,
}: HttpRequest): Promise<HttpResponse<T>> => {
  const fullUrl = buildUrl(url, query);

  try {
    const response = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal,
    });

    const responseBody = await safeParseBody(response);

    if (!response.ok) {
      throw new HttpError(
        "HTTP request failed",
        response.status,
        responseBody,
        response.headers,
      );
    }

    return {
      data: responseBody as T,
      status: response.status,
      headers: response.headers,
    };
  } catch (err) {
    if (err instanceof HttpError) {
      throw err;
    }

    if (err instanceof DOMException && err.name === "AbortError") {
      throw new HttpError("Request aborted", null);
    }

    throw new HttpError("Network error", null);
  }
};

const buildUrl = (url: string, query?: HttpRequest["query"]) => {
  if (!query) return url;

  const search = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined) {
      search.append(key, String(value));
    }
  });

  const qs = search.toString();
  return qs ? `${url}?${qs}` : url;
};

const safeParseBody = async (response: Response): Promise<unknown> => {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    try {
      return await response.json();
    } catch {
      return undefined;
    }
  }

  try {
    return await response.text();
  } catch {
    return undefined;
  }
};

export { request };
