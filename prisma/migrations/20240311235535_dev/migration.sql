/*
  Warnings:

  - Added the required column `fileName` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "fileName" TEXT NOT NULL;
