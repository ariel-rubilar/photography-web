import { http, HttpResponse } from "msw";

export const handlers = [
  http.all("*", () => {
    return HttpResponse.json({});
  }),
];
