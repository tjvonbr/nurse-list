-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "state" TEXT NOT NULL,
    "stateInitials" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "population" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);
