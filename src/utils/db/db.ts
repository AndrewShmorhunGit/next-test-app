import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.STAGE === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
