import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/auth";
import { userAllowedFields } from "@/schema/base";

export async function getSession() {
  return await getServerSession(authOptions);
}

export type GetCurrentUserT = Awaited<ReturnType<typeof getCurrentUser>>;

export async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        ...userAllowedFields,
        // profile: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
