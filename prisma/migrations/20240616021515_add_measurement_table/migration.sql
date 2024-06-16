-- CreateTable
CREATE TABLE `measurement` (
    `measurement_ID` INTEGER NOT NULL,
    `equipment_ID` INTEGER NULL,
    `user_ID` INTEGER NULL,
    `value` FLOAT NULL,
    `unit` VARCHAR(50) NULL,

    PRIMARY KEY (`measurement_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
