-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rentacar
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudes` (
  `solicitud_id` int NOT NULL AUTO_INCREMENT,
  `vendedor_id` int DEFAULT NULL,
  `modelo_id` int DEFAULT NULL,
  `fecha` date NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`solicitud_id`),
  KEY `vendedor_id` (`vendedor_id`),
  KEY `modelo_id` (`modelo_id`),
  CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedor` (`vendedor_id`),
  CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`modelo_id`) REFERENCES `modeloauto` (`modelo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
INSERT INTO `solicitudes` VALUES (1,1,1,'2024-07-01',20000.00),(2,1,2,'2024-07-05',25000.00),(3,2,3,'2024-07-10',18000.00),(4,2,4,'2024-07-15',30000.00),(5,3,5,'2024-07-20',22000.00),(6,3,6,'2024-07-25',27000.00),(7,4,7,'2024-07-30',21000.00),(8,4,8,'2024-07-02',32000.00),(9,5,9,'2024-07-08',40000.00),(10,5,10,'2024-07-12',35000.00),(11,2,1,'2024-02-01',20000.00),(12,3,2,'2024-04-05',25000.00),(13,4,3,'2024-04-10',18000.00),(14,5,4,'2024-03-15',30000.00),(15,3,5,'2024-02-20',22000.00),(16,3,6,'2024-01-25',27000.00),(17,4,7,'2024-05-30',21000.00),(18,4,8,'2024-04-02',32000.00),(19,5,9,'2024-03-08',40000.00),(20,5,10,'2024-02-12',35000.00);
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24 23:58:28
