-- AlterTable
ALTER TABLE "UserToken" ALTER COLUMN "accessToken" DROP NOT NULL,
ALTER COLUMN "refreshToken" DROP NOT NULL;
