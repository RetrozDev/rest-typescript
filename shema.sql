

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `completed` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `tasks` WRITE;
INSERT INTO `tasks` VALUES (1,'Faire les courses','Acheter des légumes, du pain et des ?ufs.',0,'2025-03-29 01:14:21','2025-03-29 01:14:21'),(2,'Répondre aux emails','Répondre à tous les emails de cette semaine.',0,'2025-03-29 01:14:21','2025-03-29 01:14:21'),(3,'Finaliser la documentation du projet','Mettre à jour la documentation du backend.',0,'2025-03-29 01:14:21','2025-03-29 01:14:21'),(4,'Réviser le code','Revoir le code du module de paiement.',1,'2025-03-29 01:14:21','2025-03-29 01:14:21'),(6,'Tache de testttt','Description tache de test',0,'2025-03-29 01:51:39','2025-03-29 01:51:39');
UNLOCK TABLES;

