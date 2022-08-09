-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "image" TEXT NOT NULL,
    "event_date" TIMESTAMP(3) NOT NULL,
    "location" VARCHAR(250) NOT NULL,
    "ready" BOOLEAN NOT NULL,
    "phone" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);
