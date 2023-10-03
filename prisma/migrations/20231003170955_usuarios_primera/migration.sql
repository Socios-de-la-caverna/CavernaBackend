-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discord_id` VARCHAR(30) NOT NULL,
    `nombre_visual` VARCHAR(30) NOT NULL,
    `nombre_global` VARCHAR(30) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,
    `importancia` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
