import { NextRequest, NextResponse } from "next/server";

import {
  i18nMiddleware,
  config as i18nConfig,
} from "middleware/i18n.middleware";
import {
  clerkMiddleware,
  config as clerkConfig,
} from "middleware/clerk.middleware";

export default async function middleware(req: NextRequest, res: NextResponse) {
  if (req.url.includes(i18nConfig.matcher)) return i18nMiddleware(req, res);

  if (req.url.includes(clerkConfig.matcher)) return clerkMiddleware(req, res);
  console.log("Middleware!");
}

// const response = middleware(NextRequest);

export const config = {
  matcher: [...clerkConfig.matcher, i18nConfig.matcher],
};
