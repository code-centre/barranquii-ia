-- CreateEnum
CREATE TYPE "IdType" AS ENUM ('CC', 'CE', 'TI', 'PASSPORT');

-- CreateEnum
CREATE TYPE "FoodRestriction" AS ENUM ('VEGAN', 'VEGETARIAN', 'KOSHER', 'NONE');

-- CreateEnum
CREATE TYPE "ShirtSize" AS ENUM ('XS', 'S', 'M', 'L', 'XL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "idType" "IdType" NOT NULL,
    "idNumber" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "profile" VARCHAR(255) NOT NULL,
    "work" VARCHAR(255) NOT NULL,
    "shirtSize" "ShirtSize" NOT NULL,
    "food" "FoodRestriction" NOT NULL,
    "emergencyName" VARCHAR(255) NOT NULL,
    "emergencyPhone" VARCHAR(255) NOT NULL,
    "isStaying" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
