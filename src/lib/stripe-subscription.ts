import { db } from "./prisma";

export async function getUserSubscription(userId: string) {
  const dbUser = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!dbUser) {
    throw new Error("User not found");
  }

  return {
    ...dbUser,
  };
}
