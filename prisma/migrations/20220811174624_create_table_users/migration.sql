-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT true;