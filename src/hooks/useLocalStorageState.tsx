"use client";

import React from "react";

export function useLocalStorageState(
  key: string,
  defaultValue: any | Function = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = global.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  React.useDebugValue(`${key}: ${serialize(state)}`);

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      global.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
  }, [key]);

  React.useEffect(() => {
    global.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
