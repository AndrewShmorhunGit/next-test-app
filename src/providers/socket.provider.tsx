"use client";
import { io as ClientIO } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
// import { increment, decrement, useAppDispatch } from "app/redux";

type SocketContentType = {
  socket: any | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContentType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  // const dispatch = useAppDispatch();
  const [isSocket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = new (ClientIO as any)(
      process.env.NEXT_PUBLIC_SITE_URL!,
      {
        path: "/api/socket/io",
        addTrailingSlash: false,
      }
    );

    socketInstance.on("connect", () => {
      setIsConnected(true);
      // dispatch(increment());
    });

    socketInstance.on("disconnect", () => {
      setIsConnected(false);
      // dispatch(decrement());
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: isSocket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
