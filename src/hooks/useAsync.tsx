"use client";

import React from "react";

function useSafeDispatch(dispatch: any) {
  const mountedRef = React.useRef(false);
  React.useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(
    (...args: any) => (mountedRef.current ? dispatch(...args) : undefined),
    [dispatch]
  );
}

function asyncReducer(
  _state: any,
  action: { type: string; data: any; error: any }
) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.data, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useAsync(
  initialState:
    | { status: string; data: any; error: null }
    | { status: string; data: null; error: any } = {
    status: "idle",
    data: null,
    error: null,
  }
) {
  const initialStateRef = React.useRef({
    ...initialState,
  });
  const [{ status, data, error }, unsafeDispatch] = React.useReducer(
    asyncReducer,
    initialStateRef.current
  );

  const isLoading = status === "pending";
  const isSuccess = status === "resolved";
  const isError = status === "rejected";

  const dispatch = useSafeDispatch(unsafeDispatch);

  const run = React.useCallback(
    (promise: Promise<any>) => {
      dispatch({ type: "pending" });
      promise.then(
        (data: any) => {
          dispatch({ type: "resolved", data });
        },
        (error: any) => {
          dispatch({ type: "rejected", error });
        }
      );
    },
    [dispatch]
  );

  return {
    error,
    status,
    data,
    run,
    isLoading,
    isSuccess,
    isError,
  };
}

export { useAsync };
