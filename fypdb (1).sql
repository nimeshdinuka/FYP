-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 03:01 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fypdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `orderid` int(10) NOT NULL,
  `totalprice` int(15) NOT NULL,
  `orderdate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `deliverydata`
--

CREATE TABLE `deliverydata` (
  `id` int(11) NOT NULL,
  `workmobile` int(15) NOT NULL,
  `address` varchar(100) NOT NULL,
  `closelocation` varchar(50) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `shopid` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedbackid` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `comment` int(11) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fooditem`
--

CREATE TABLE `fooditem` (
  `itemid` int(10) NOT NULL,
  `shopid` int(255) NOT NULL,
  `itemname` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` int(15) NOT NULL,
  `itempic` varchar(1000) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `category` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `foodorder`
--

CREATE TABLE `foodorder` (
  `orderid` int(11) NOT NULL,
  `customerusername` varchar(50) NOT NULL,
  `shopid` int(11) NOT NULL,
  `datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `offerid` int(10) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `offerpic` varchar(1000) NOT NULL,
  `shopid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `orderdata`
--

CREATE TABLE `orderdata` (
  `id` int(11) NOT NULL,
  `orderid` int(100) NOT NULL,
  `foodname` varchar(255) NOT NULL,
  `quantity` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `shopid` int(11) NOT NULL,
  `shopname` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `shoppic` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shopid`, `shopname`, `description`, `shoppic`) VALUES
(1, 'Burger King', 'Burger King is an American multinational chain of ', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1200px-Burger_King_Logo.svg.png'),
(2, 'Pizza Hut', 'Pizza Hut, a subsidiary of Yum! Brands, is the wor', 'https://s3-ap-southeast-1.amazonaws.com/dfcc.lk/wp-content/uploads/2019/10/22080249/760-x-600-Pizza-Hut-1.jpg'),
(3, 'Baskin Robbins', 'At Baskin-Robbins, our passion for ice cream const', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png'),
(4, 'Dinemore', 'Story Began In Year 1996 When Our Founders Believe', 'https://combank.infishopper.com/proimages/Dinemore.jpg'),
(5, 'Chinese Dragon Cafe', 'The Chinese Dragon Café (Pvt) Ltd is Sri Lanka’s o', 'https://media-cdn.tripadvisor.com/media/photo-s/14/e7/55/a9/l-6c6a7e4aa4cee2e0cc60fc151d7d.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `mobileno` int(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(16) NOT NULL,
  `usertype` varchar(15) NOT NULL,
  `shopid` int(10) NOT NULL,
  `gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `username`, `firstname`, `lastname`, `mobileno`, `email`, `password`, `usertype`, `shopid`, `gender`) VALUES
(1, 'nimesh', 'Nimesh', 'Dinuka', 776134572, 'nimeshdinuka@gmail.com', 'nimesh1234', 'customer', 0, 'male'),
(2, 'jaliya', 'Jaliya', 'Lakshan', 709833271, 'jaliyalak@gamil.com', 'jaliya1234', 'customer', 0, 'male'),
(3, 'admin', 'Priyanka', 'Gamage', 712993782, 'priyanka@gmail.com', 'admin1234', 'admin', 0, 'male'),
(4, 'haritha', 'Haritha', 'Senevirathne', 718902331, 'haritha@gmail.com', 'haritha1234', 'manager', 1, 'male'),
(5, 'nipuna', 'Nipuna', 'Madushan', 786128392, 'nipuna@gmail.com', 'nipuna1234', 'manager', 2, 'male'),
(6, 'paboda', 'Paboda', 'Senevirathne', 716772890, 'paboda@yahoo.com', 'paboda1234', 'customer', 0, 'female'),
(7, 'nuwan', 'Nuwan', 'Prabath', 761244891, 'nuwan@gmail.com', 'nuwan1234', 'manager', 3, 'male'),
(8, 'sameera', 'Sameera', 'Chandimal', 718988240, 'sameera@gmail.com', 'sameera1234', 'manager', 4, 'male'),
(9, 'shalini', 'Shalini', 'Perera', 788912341, 'shalini@gmail.com', 'shalini1234', 'manager', 5, 'female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `deliverydata`
--
ALTER TABLE `deliverydata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedbackid`);

--
-- Indexes for table `fooditem`
--
ALTER TABLE `fooditem`
  ADD PRIMARY KEY (`itemid`);

--
-- Indexes for table `foodorder`
--
ALTER TABLE `foodorder`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`offerid`);

--
-- Indexes for table `orderdata`
--
ALTER TABLE `orderdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shopid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `orderid` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deliverydata`
--
ALTER TABLE `deliverydata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fooditem`
--
ALTER TABLE `fooditem`
  MODIFY `itemid` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `foodorder`
--
ALTER TABLE `foodorder`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `offerid` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdata`
--
ALTER TABLE `orderdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shopid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
