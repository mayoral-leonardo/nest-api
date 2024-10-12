-- CreateTable
CREATE TABLE `user_responsibilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `responsibleUserId` INTEGER UNSIGNED NOT NULL,
    `dependentUserId` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `user_responsibilities_responsibleUserId_dependentUserId_key`(`responsibleUserId`, `dependentUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_responsibilities` ADD CONSTRAINT `user_responsibilities_responsibleUserId_fkey` FOREIGN KEY (`responsibleUserId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_responsibilities` ADD CONSTRAINT `user_responsibilities_dependentUserId_fkey` FOREIGN KEY (`dependentUserId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
