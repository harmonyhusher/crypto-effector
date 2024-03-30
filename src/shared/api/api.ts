import { HTTPAuth, HTTPMethod } from "./types";

export default async function request<TResponse, TRequest = any>(
  url: string,
  method: HTTPMethod,
  authType: HTTPAuth,
  body?: TRequest,
  headers?: HeadersInit
): Promise<TResponse> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  const authHeaders = {
    Bearer: (token: string) => ({ Authorization: `Bearer ${token}` }),
    "X-API-Key": (apiKey: string) => ({ "X-API-Key": apiKey }),
  };

  const selectedAuthHeader = authHeaders[authType](token as string);

  const ans = await fetch(baseURL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...selectedAuthHeader,
      ...headers,
    },
    body: JSON.stringify(body),
  });

  const getData = async (response: Response) => {
    try {
      return await response.json();
    } catch (e) {
      return e;
    }
  };

  const { status } = ans;

  const data = await getData(ans);

  if (status !== 200 && status !== 201 && status !== 204) {
    return {
      ...data,
      statusCode: 1,
      message: data.message,
    };
  }
  return data;
}
