import { HTTPMethod } from "./types";

export default async function request<TResponse, TRequest = any>(
  url: string,
  method: HTTPMethod,
  body?: TRequest,
  headers?: HeadersInit
): Promise<TResponse & ResponseType> {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  const ans = await fetch(baseURL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
