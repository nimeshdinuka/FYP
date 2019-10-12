-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2019 at 06:57 PM
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
-- Database: `ezfood`
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
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedbackid` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `datetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedbackid`, `category`, `comment`, `datetime`) VALUES
(1, 'environment', 'sasas', NULL);

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
  `itempic` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fooditem`
--

INSERT INTO `fooditem` (`itemid`, `shopid`, `itemname`, `description`, `price`, `itempic`) VALUES
(1, 1, 'Cheese Burger', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ', 500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRWxire2tus_4s_KnYl-ZUbNPUB8qCB_lSg_zgcYANODBbgvuYw'),
(2, 1, 'Chicken Burger', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ', 440, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfStB-PWVKNLVntoxn_PXTJ47AuAJ1sifBhgSMsJw0CIW6Zgr'),
(3, 2, 'Beef Submarine', 'submarine lorem ipsum', 480, 'https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg'),
(4, 2, 'cheese submarine', 'sub with cheese', 450, 'https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/fm-best-sandwiches_1.gif?itok=S3xQ3zrU'),
(5, 2, 'vegy submarine', 'sub full of vegetables', 360, ''),
(6, 2, 'qqq', 'qqq', 111, ''),
(7, 2, 'www', 'www', 222, ''),
(8, 2, 'eee', 'eee', 333, ''),
(9, 1, 'qqq', 'www', 111, 'aaa'),
(10, 1, 'pppp', 'pppp', 0, 'data:image/jpeg;base64,content://com.android.providers.media.documents/document/image%3A910'),
(11, 1, 'jjjj', 'jjjjj', 777, 'data:image/jpeg;base64,content://com.android.providers.media.documents/document/image%3A910');

-- --------------------------------------------------------

--
-- Table structure for table `foodorder`
--

CREATE TABLE `foodorder` (
  `orderid` int(11) NOT NULL,
  `customerusername` varchar(50) NOT NULL,
  `shopid` int(11) NOT NULL,
  `datetime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `foodorder`
--

INSERT INTO `foodorder` (`orderid`, `customerusername`, `shopid`, `datetime`) VALUES
(1, 'Nimesh', 1, NULL),
(2, 'Nimesh', 1, NULL),
(3, 'Nimesh', 1, NULL),
(4, 'Nimesh', 1, NULL),
(5, 'Nimesh', 1, NULL),
(6, 'Nimesh', 1, NULL),
(7, 'Nimesh', 1, NULL),
(8, 'Nimesh', 1, NULL),
(9, 'Nimesh', 1, NULL),
(10, 'Nimesh', 1, NULL),
(11, 'Nimesh', 1, NULL),
(12, 'Nimesh', 1, NULL),
(13, 'Nimesh', 1, NULL),
(14, 'Nimesh', 1, NULL),
(15, 'Nimesh', 1, NULL),
(16, 'Nimesh', 2, NULL),
(17, 'Nimesh', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `offerid` int(10) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `offerpic` varchar(1000) DEFAULT NULL,
  `shopid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`offerid`, `title`, `description`, `offerpic`, `shopid`) VALUES
(1, 'wqwweqw', 'wqwq', NULL, 2),
(2, 'ewew', 'wewe', NULL, 2),
(3, 'dsdsd', 'sdsds', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdata`
--

CREATE TABLE `orderdata` (
  `orderid` int(100) NOT NULL,
  `foodname` varchar(255) NOT NULL,
  `quantity` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentid` int(10) NOT NULL,
  `amount` int(15) NOT NULL,
  `paymentdate` date NOT NULL,
  `orderid` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `shopid` int(10) NOT NULL,
  `shopname` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `shoppic` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shopid`, `shopname`, `description`, `shoppic`) VALUES
(1, 'Burger King', ' Lorem ipsum dolor sit amet, consectetur adipiscin', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S2YLf04i9ScZF4QwCVI6TzFyt1SdyAYA4O65RyZS0IvYxEOY0w'),
(2, 'Dinemore', 'Its all about Sub', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9o6JfF0mSbPHuPXgfmxwSuRNEA98j2aalVGOAfkHx9SRWOYW'),
(3, 'Pizza Hut', 'loremasiaisaisjasaosa', NULL);

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
  `shopid` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `username`, `firstname`, `lastname`, `mobileno`, `email`, `password`, `usertype`, `shopid`) VALUES
(1, 'aa', 'ddsdd', 'dsd', 0, 'dsd', 'aa', 'customer', 0),
(3, 'admin', 'Nimesh', 'Dinuka', 777154365, 'superad@gmail.com', 'admin123', 'admin', 0),
(4, 'manager', 'Paboda', 'Jayamali', 713542355, 'mgr@gmail.com', 'mgr123', 'manager', 1),
(5, 'manager2', 'jay', 'boobu', 713542121, 'mgr2@gmail.com', 'mgr456', 'manager', 2),
(6, 'aaa', 'aaa', 'aaa', 111111111, 'aaa@gmail.com', 'aaa', 'manager', 2),
(7, 'cashier', 'nish', 'jay', 123, 'nishjay@gmail.com', 'cash123', 'cashier', 1),
(8, 'bbb', 'bbb', 'bbb', 2147483647, 'bbb', 'bbb', 'cashier', 2),
(9, 'alpha', 'Nimesh', 'Alpha', 718664536, 'nishalpha@gmail.com', '1234', 'customer', NULL),
(10, 'user', 'user1', 'user11', 778987154, 'user@gmail.com', '1234', 'customer', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedbackid`);

--
-- Indexes for table `fooditem`
--
ALTER TABLE `fooditem`
  ADD PRIMARY KEY (`itemid`),
  ADD KEY `fooditem_ibfk_1` (`shopid`);

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
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentid`);

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
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fooditem`
--
ALTER TABLE `fooditem`
  MODIFY `itemid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `foodorder`
--
ALTER TABLE `foodorder`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `offerid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentid` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shopid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fooditem`
--
ALTER TABLE `fooditem`
  ADD CONSTRAINT `fooditem_ibfk_1` FOREIGN KEY (`shopid`) REFERENCES `shops` (`shopid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
