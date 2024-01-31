import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export type TGetCurrentUser = Awaited<ReturnType<typeof getCurrentUser>>;

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
      include: {
        profile: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    const { hashedPassword, ...props } = currentUser;

    return {
      ...props,
    };
  } catch (error: any) {
    return null;
  }
}
