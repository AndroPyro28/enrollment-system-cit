import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { Session } from "next-auth";
import { authOptions } from "./auth";
import { User, Role } from "@prisma/client";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

interface WithAuthHandler {
  ({
    req,
    params,
    searchParams,
    headers,
    session,
  }: {
    req: Request;
    params: Record<string, string>;
    searchParams: Record<string, string>;
    headers?: Record<string, string>;
    session: Session;
    currentUser?: User;
  }): Promise<Response>;
}

interface RequiredRole {
  requiredRole?: Array<Role>;
}

export const withAuth =
  (handler: WithAuthHandler, { requiredRole = [] }: RequiredRole = {}) =>
  async (
    req: Request,
    { params }: { params: Record<string, string> | undefined }
  ) => {
    const searchParams = getSearchParams(req);

    let session: Session | null;
    let headers = {};

    session = await getSession();
    console.log("🚀 ~ file: index.ts:55 ~ session:", session);

    if (process.env.NODE_ENV === "development") {
      return handler({
        req,
        params: params || {},
        searchParams,
        headers,
        session: {
          user: {
            id: "1",
            name: "John Doe",
            email: "John@gmail.com",
            image: "",
            role: "admin",
          },
          expires: "2021-08-20T12:00:00.000Z",
        },
      });
    }

    if (!session) {
      return new Response("Unauthorized: Login required.", {
        status: 401,
        headers,
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
        role: session.user.role as Role,
      },
    });

    if (!user) {
      return new Response("Unauthorized: Login required.", {
        status: 401,
        headers,
      });
    }

    if (requiredRole.length > 0 && !requiredRole.includes(user.role)) {
      return new Response("Unauthorized: Role required.", {
        status: 401,
        headers,
      });
    }

    return handler({
      req,
      params: params || {},
      searchParams,
      headers,
      session,
    });
  };

const getSearchParams = (req: Request) => {
  return Object.fromEntries(new URL(req.url).searchParams);
};
