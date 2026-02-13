import { CLIENT_CONFIG } from "@/shared/lib/config";
import { HttpRequest, HttpResponse, request } from "@/shared/lib/http";
import { SuccessResponse } from "./types";

const publicRequest = <T>({
  url,
  ...req
}: HttpRequest): Promise<HttpResponse<SuccessResponse<T>>> => {
  console.log(
    "Making public request to:",
    CLIENT_CONFIG.WEB_PHOTO_BASE_API_URI,
  );
  const fullUrl = `${CLIENT_CONFIG.WEB_PHOTO_BASE_API_URI}${url}`;

  return request({
    url: fullUrl,
    ...req,
  });
};

export { publicRequest };
