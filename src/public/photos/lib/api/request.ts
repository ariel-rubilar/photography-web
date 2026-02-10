import { CONFIG } from "@/shared/lib/config";
import { HttpRequest, HttpResponse, request } from "@/shared/lib/http";
import { SuccessResponse } from "./types";

const publicRequest = <T>({
  url,
  ...req
}: HttpRequest): Promise<HttpResponse<SuccessResponse<T>>> => {
  const fullUrl = `${CONFIG.APP.WEB_PHOTO_BASE_API_URI}/web/${url}`;

  return request({
    url: fullUrl,
    ...req,
  });
};

export { publicRequest };
