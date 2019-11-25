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
-- Database: `ezfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `orderid` int(10) NOT NULL,
  `totalprice` int(15) NOT NULL,
  `orderdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`orderid`, `totalprice`, `orderdate`) VALUES
(69, 700, NULL),
(70, 2050, NULL),
(71, 2400, NULL);

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

--
-- Dumping data for table `deliverydata`
--

INSERT INTO `deliverydata` (`id`, `workmobile`, `address`, `closelocation`, `userid`, `shopid`) VALUES
(1, 778356271, 'lorem ipsumddw', 'galle town', 'user1', 1),
(2, 2147483647, 'galle', 'navy camp', 'Nimesh', 1),
(3, 0, 'qqqqqqq', 'qqqqqqqqqq', 'user1', 1),
(4, 0, '123', 'galle', 'user1', 1),
(5, 0, 'asas', 'sasa', 'user1', 1),
(6, 0, 'tr', 'rt', 'user1', 1),
(7, 0, 'qq', 'qq', 'user1', 1),
(8, 766238991, 'No:7c, galle', 'town hall', 'user1', 1),
(9, 766156791, 'no:49,battaramulla', 'diyatha park', 'user1', 1);

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
(1, 'environment', 'sasas', NULL),
(2, 'service', 'dcmasijcopajcojocddqewded edcewddce', NULL),
(3, 'restaurant', 'nice', NULL);

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

--
-- Dumping data for table `fooditem`
--

INSERT INTO `fooditem` (`itemid`, `shopid`, `itemname`, `description`, `price`, `itempic`, `gender`, `category`) VALUES
(1, 1, 'Cheese Burger', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ', 500, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRWxire2tus_4s_KnYl-ZUbNPUB8qCB_lSg_zgcYANODBbgvuYw', '', 'veg'),
(2, 1, 'Chicken Burger', ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ', 440, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfStB-PWVKNLVntoxn_PXTJ47AuAJ1sifBhgSMsJw0CIW6Zgr', '', 'nonveg'),
(3, 2, 'Beef Submarine', 'submarine lorem ipsum', 480, 'https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg', '', 'nonveg'),
(4, 2, 'cheese submarine', 'sub with cheese', 450, 'https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/fm-best-sandwiches_1.gif?itok=S3xQ3zrU', '', 'veg'),
(12, 1, 'noodles', 'all about noodles', 350, 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format', '', 'veg'),
(13, 1, 'sausage pizza', 'asasasasa', 380, 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format', 'male', 'nonveg'),
(14, 1, 'ham burger', 'asasas', 350, 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format', 'male', 'burger'),
(15, 1, 'spicy chicken burger', 'burger with spiced chicken', 420, 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format', 'male', 'burger'),
(16, 1, 'crispy chicken burge', 'burger with crispy taste', 450, 'https://chinesenewyear.imgix.net/assets/images/food/chinese-new-year-food-feast.jpg?q=50&w=1920&h=1080&fit=crop&auto=format', 'female', 'burger');

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
(17, 'Nimesh', 1, NULL),
(18, 'Nimesh', 1, NULL),
(19, 'Nimesh', 1, NULL),
(20, 'Nimesh', 1, NULL),
(21, 'Nimesh', 1, NULL),
(22, 'Nimesh', 1, NULL),
(23, 'Nimesh', 1, NULL),
(24, 'Nimesh', 1, NULL),
(25, 'Nimesh', 1, NULL),
(26, 'Nimesh', 1, NULL),
(27, 'Nimesh', 1, NULL),
(28, 'Nimesh', 1, NULL),
(29, 'Nimesh', 1, NULL),
(30, 'Nimesh', 1, NULL),
(31, 'Nimesh', 1, NULL),
(32, 'Nimesh', 1, NULL),
(33, 'Nimesh', 1, NULL),
(34, 'Nimesh', 1, NULL),
(35, 'Nimesh', 1, NULL),
(36, 'Nimesh', 1, NULL),
(37, 'Nimesh', 1, NULL),
(38, 'Nimesh', 1, NULL),
(39, 'Nimesh', 1, NULL),
(40, 'Nimesh', 1, NULL),
(41, 'Nimesh', 2, NULL),
(42, 'Nimesh', 2, NULL),
(43, 'Nimesh', 1, NULL),
(44, 'Nimesh', 1, NULL),
(45, 'Nimesh', 1, NULL),
(46, 'Nimesh', 1, NULL),
(47, 'Nimesh', 1, NULL),
(48, 'Nimesh', 1, NULL),
(49, 'Nimesh', 1, NULL),
(50, 'Nimesh', 1, NULL),
(51, 'Nimesh', 1, NULL),
(52, 'Nimesh', 1, NULL),
(53, 'Nimesh', 2, NULL),
(54, 'Nimesh', 1, NULL),
(55, 'Nimesh', 1, NULL),
(56, 'Nimesh', 1, NULL),
(57, 'Nimesh', 1, NULL),
(58, 'Nimesh', 1, NULL),
(59, 'Nimesh', 1, NULL),
(60, 'user1', 1, NULL),
(61, 'user1', 1, NULL),
(62, 'user1', 1, NULL),
(63, 'user1', 1, NULL),
(64, 'Nimesh', 1, NULL),
(65, 'user1', 1, NULL),
(66, 'user1', 1, NULL),
(67, 'user1', 1, NULL),
(68, 'user1', 1, NULL),
(69, 'user1', 1, NULL),
(70, 'user1', 1, NULL),
(71, 'user1', 1, NULL);

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
(4, 'offer1', 'asasasasasas', 'http://www.carepoint.lk/images/offer/offer1.jpg', 1),
(5, 'December Offer', 'Limited via 20- 25th december', 'http://www.carepoint.lk/images/offer/offer1.jpg', 1),
(6, 'Christmas Offer', 'valid from 20th - 28th', 'http://www.carepoint.lk/images/offer/offer1.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderdata`
--

CREATE TABLE `orderdata` (
  `id` int(100) NOT NULL,
  `orderid` int(100) NOT NULL,
  `foodname` varchar(255) NOT NULL,
  `quantity` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderdata`
--

INSERT INTO `orderdata` (`id`, `orderid`, `foodname`, `quantity`) VALUES
(1, 37, 'Cheese Burger', NULL),
(2, 37, 'Chicken Burger', NULL),
(3, 38, 'Cheese Burger', NULL),
(4, 38, 'Chicken Burger', NULL),
(5, 39, 'Cheese Burger', 2),
(6, 39, 'Cheese Burger', 2),
(7, 39, 'Chicken Burger', 2),
(8, 39, 'Chicken Burger', 2),
(9, 40, 'Cheese Burger', 2),
(10, 40, 'Chicken Burger', 2),
(11, 41, 'Beef Submarine', 2),
(12, 41, 'cheese submarine', 2),
(13, 42, 'Beef Submarine', 3),
(14, 42, 'cheese submarine', 3),
(15, 43, 'Chicken Burger', 3),
(16, 44, 'Cheese Burger', 1),
(17, 44, 'Cheese Burger', 3),
(18, 44, 'Chicken Burger', 1),
(19, 44, 'Chicken Burger', 3),
(20, 47, 'name', 0),
(21, 47, 'name', 0),
(22, 52, 'Cheese Burger', 1),
(23, 52, 'Chicken Burger', 3),
(24, 53, 'Beef Submarine', 3),
(25, 53, 'cheese submarine', 6),
(26, 54, 'Cheese Burger', 2),
(27, 55, 'Cheese Burger', 3),
(28, 55, 'Chicken Burger', 3),
(29, 56, 'Cheese Burger', 2),
(30, 56, 'Chicken Burger', 2),
(31, 57, 'Cheese Burger', 2),
(32, 57, 'Chicken Burger', 2),
(33, 58, 'Cheese Burger', 1),
(34, 58, 'Chicken Burger', 2),
(35, 59, 'Cheese Burger', 2),
(36, 59, 'Chicken Burger', 2),
(37, 60, 'Cheese Burger', 1),
(38, 60, 'Chicken Burger', 1),
(39, 61, 'Cheese Burger', 2),
(40, 61, 'Chicken Burger', 2),
(41, 62, 'Cheese Burger', 2),
(42, 62, 'Chicken Burger', 2),
(43, 63, 'Cheese Burger', 2),
(44, 63, 'Chicken Burger', 1),
(45, 64, 'Cheese Burger', 2),
(46, 64, 'Chicken Burger', 2),
(47, 65, 'Cheese Burger', 1),
(48, 65, 'Chicken Burger', 1),
(49, 66, 'Cheese Burger', 2),
(50, 66, 'Chicken Burger', 1),
(51, 67, 'Cheese Burger', 2),
(52, 67, 'Chicken Burger', 2),
(53, 68, 'Cheese Burger', 2),
(54, 69, 'noodles', 2),
(55, 70, 'Cheese Burger', 2),
(56, 70, 'ham burger', 3),
(57, 71, 'Chicken Burger', 3),
(58, 71, 'sausage pizza', 1),
(59, 71, 'ham burger', 2);

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
(5, 'Sensal', 'began in 1988', 'https://c1.staticflickr.com/3/2208/2364198089_cd1fde2168_b.jpg'),
(6, 'Pizza hut', 'A shop for a better meal', 'https://c1.staticflickr.com/3/2208/2364198089_cd1fde2168_b.jpg'),
(7, 'Roots', 'Its all about juices', 'https://c1.staticflickr.com/3/2208/2364198089_cd1fde2168_b.jpg');

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
  `shopid` int(10) DEFAULT NULL,
  `gender` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userid`, `username`, `firstname`, `lastname`, `mobileno`, `email`, `password`, `usertype`, `shopid`, `gender`) VALUES
(1, 'aa', 'ddsdd', 'dsd', 0, 'dsd', 'aa', 'customer', 0, ''),
(3, 'admin', 'Nimesh', 'Dinuka', 777154365, 'superad@gmail.com', 'admin123', 'admin', 0, ''),
(4, 'manager', 'Paboda', 'Jayamali', 713542355, 'mgr@gmail.com', 'mgr123', 'manager', 1, ''),
(6, 'aaa', 'aaa', 'aaa', 111111111, 'aaa@gmail.com', 'aaa', 'manager', 2, ''),
(7, 'cashier', 'nish', 'jay', 123, 'nishjay@gmail.com', 'cash123', 'cashier', 1, ''),
(8, 'bbb', 'bbb', 'bbb', 2147483647, 'bbb', 'bbb', 'cashier', 2, ''),
(9, 'alpha', 'Nimesh', 'Alpha', 718664536, 'nishalpha@gmail.com', '1234', 'customer', NULL, ''),
(10, 'user', 'user1', 'user11', 778987154, 'user@gmail.com', '1234', 'customer', NULL, 'male'),
(11, 'sysadmin', 'sys', 'admin', 778987152, 'sysad@gmail.com', 'sys123', 'admin', NULL, ''),
(13, 'aaaw', 'aaaw', 'aaaaw', 12312121, 'aaaaw', 'aaa123', 'manager', 2, ''),
(14, 'wewew', 'qwqwq', 'wewew', 2321312, 'wew', 'ew', 'cashier', 1, ''),
(15, 'sugath1', 'Sugath', 'Gamage', 789661543, 'sugath@gmail.com', 'sugath1234', 'manager', 5, ''),
(16, 'damithcash', 'damith', 'asanka', 710772945, 'damith1@gmail.com', '1234', 'cashier', 1, ''),
(17, 'asas', 'aa', 'aa', 1212121, 'asasa', 'aw11w', 'customer', NULL, 'female'),
(18, 'sudesh', 'Sudesh', 'Senarathne', 766156723, 'sudesh@yahoo.com', '1234', 'manager', 6, ''),
(19, 'kasun', 'Kasun', 'Sandaruwan', 788967182, 'kasun@gmail.com', '1234', 'cashier', 1, ''),
(20, 'videsh', 'Videsh', 'Akalanka', 766189227, 'videsh@gmail.com', '1234', 'customer', NULL, 'male');

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `orderid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `deliverydata`
--
ALTER TABLE `deliverydata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fooditem`
--
ALTER TABLE `fooditem`
  MODIFY `itemid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `foodorder`
--
ALTER TABLE `foodorder`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `offerid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orderdata`
--
ALTER TABLE `orderdata`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentid` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shopid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
