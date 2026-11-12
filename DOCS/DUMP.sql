-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: db_solartech
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `codCliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  PRIMARY KEY (`codCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Miguel','miguel@gmail','U2FsdGVkX19p5BghzFHXeEizBObJ5/S3gFAFSE4wNJ4=','U2FsdGVkX1+XVpJdYFcwwZucX131GrasVowtSWQXVEs='),(2,'Carlos','carlos@gmail','U2FsdGVkX1/wPl9C9BkJv6Oq9aRv6zOl8wsS9OpoL4Q=','U2FsdGVkX1+/jlb3FMj26qAggBIGQBnCfaeldVC/XuY='),(3,'joao belo','joao@gmail','U2FsdGVkX1/UrWgdqXAj8btdDa1FoLd5//5xRGFzl6s=','U2FsdGVkX1/UE2hF2cpOV9Fa3A5vLcFr2n3djaysxHE=');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipamentos`
--

DROP TABLE IF EXISTS `equipamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipamentos` (
  `codEquipamento` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(255) NOT NULL,
  `fabricante` varchar(255) NOT NULL,
  `numSerie` varchar(255) NOT NULL,
  `idCliente` int NOT NULL,
  PRIMARY KEY (`codEquipamento`),
  KEY `idCliente` (`idCliente`),
  CONSTRAINT `equipamentos_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`codCliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipamentos`
--

LOCK TABLES `equipamentos` WRITE;
/*!40000 ALTER TABLE `equipamentos` DISABLE KEYS */;
INSERT INTO `equipamentos` VALUES (1,'painel solar','solaris','U2FsdGVkX197eA1ppbZlZWNRWZSjX5NhaoqUD526fr8=',1),(2,'Painel Fotovoltaico','FotusLotus','U2FsdGVkX19+EMeQ5OC7zKjPdE2DRexWvC6Gk66EedI=',1),(3,'teste','testeteste','U2FsdGVkX1/Mak9Y6PqD2yLmC2zgVDKUZq8cSBGd8EA=',1);
/*!40000 ALTER TABLE `equipamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `codFuncionario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`codFuncionario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (1,'mario','mario@gmail','U2FsdGVkX1/O54q6TIeKvMeUUbGWq1o3BGg+pm094jg='),(2,'eliel','eliel@gmail','U2FsdGVkX1+CEayTdCk7NifEB019OnHQXkh2/Fv8XD0=');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspecoes`
--

DROP TABLE IF EXISTS `inspecoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspecoes` (
  `codInspecao` int NOT NULL AUTO_INCREMENT,
  `status` enum('PENDENTE','REALIZADA') NOT NULL,
  `data` date NOT NULL,
  `idEquipamento` int NOT NULL,
  PRIMARY KEY (`codInspecao`),
  KEY `idEquipamento` (`idEquipamento`),
  CONSTRAINT `inspecoes_ibfk_1` FOREIGN KEY (`idEquipamento`) REFERENCES `equipamentos` (`codEquipamento`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspecoes`
--

LOCK TABLES `inspecoes` WRITE;
/*!40000 ALTER TABLE `inspecoes` DISABLE KEYS */;
INSERT INTO `inspecoes` VALUES (1,'PENDENTE','2026-10-10',1),(2,'REALIZADA','2026-11-10',2),(3,'PENDENTE','2026-12-18',1),(4,'PENDENTE','2026-12-30',1);
/*!40000 ALTER TABLE `inspecoes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-12 10:08:06
