/*
  Warnings:

  - Made the column `user_ID` on table `measurement` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `measurement` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `measurement` MODIFY `user_ID` INTEGER NOT NULL,
    MODIFY `value` FLOAT NOT NULL;
