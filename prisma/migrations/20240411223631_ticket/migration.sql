/*
  Warnings:

  - Added the required column `paymentAmount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TicketType" AS ENUM ('GENERAL', 'COMPLETO');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "paymentAmount" INTEGER NOT NULL,
ADD COLUMN     "paymentId" VARCHAR(255),
ADD COLUMN     "ticketType" "TicketType" NOT NULL;
