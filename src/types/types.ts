import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { type } from "os";
import { Server as SocketIoServer } from "socket.io";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIoServer;
    };
  };
};
