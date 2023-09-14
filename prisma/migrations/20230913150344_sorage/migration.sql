/*
  Warnings:

  - You are about to drop the column `fom` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `supplier` on the `Product` table. All the data in the column will be lost.
  - Added the required column `from` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'available',
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "new" BOOLEAN NOT NULL DEFAULT true,
    "price" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "income" TEXT NOT NULL,
    "supplier" TEXT NOT NULL,
    "guaranty" TEXT NOT NULL
);
INSERT INTO "new_Product" ("code", "group", "guaranty", "id", "image", "income", "name", "new", "price", "status", "to") SELECT "code", "group", "guaranty", "id", "image", "income", "name", "new", "price", "status", "to" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
