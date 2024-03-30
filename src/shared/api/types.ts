export interface ResponseType {
  statusCode?: 0 | 1;
  message?: string;
  error?: string;
}

export enum HTTPAuth {
  BEARER = "Bearer",
  XAPIKEY = "X-API-Key",
}


export enum HTTPMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}
