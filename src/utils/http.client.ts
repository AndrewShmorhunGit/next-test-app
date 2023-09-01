async function client(endpoint: string, customConfig = {}): Promise<Response> {
  const config = {
    method: "GET",
    "Content-Type": "application/json",
    ...customConfig,
  };

  const response = await window.fetch("server side" + endpoint, config);
  const data = response;
  if (response.ok) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(data);
  }
}

export { client };
