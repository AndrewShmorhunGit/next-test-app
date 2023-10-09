import { config } from "config/index";

export async function client(
  endpoint: string = "",
  customConfig = {}
): Promise<Response> {
  const requestConfig = {
    method: "GET",
    "Content-Type": "application/json",
    ...customConfig,
  };

  const response = await fetch(config.api.products + endpoint, requestConfig);
  const data = response;
  if (response.ok) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}
