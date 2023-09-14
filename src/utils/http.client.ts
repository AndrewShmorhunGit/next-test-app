import { config } from "config/index";

async function client(endpoint: string, customConfig = {}): Promise<Response> {
  const requestConfig = {
    method: "GET",
    "Content-Type": "application/json",
    ...customConfig,
  };

  const response = await window.fetch(
    config.api.products + endpoint,
    requestConfig
  );
  const data = response;
  if (response.ok) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}

export { client };
