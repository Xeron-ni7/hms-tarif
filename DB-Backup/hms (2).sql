-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2020 at 02:37 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(10) NOT NULL,
  `pid` int(11) NOT NULL,
  `did` int(11) NOT NULL,
  `date` varchar(255) NOT NULL DEFAULT current_timestamp(),
  `time` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `dseen` int(11) NOT NULL DEFAULT 0,
  `pseen` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `complain`
--

CREATE TABLE `complain` (
  `id` int(10) NOT NULL,
  `message` varchar(500) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `subject` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `complain`
--

INSERT INTO `complain` (`id`, `message`, `name`, `email`, `subject`) VALUES
(1, 'wdawdws', 'awdawd', 'awdw', 'adwwd'),
(2, 'Definition of complain. intransitive verb. 1 : to express grief, pain, or discontent complaining about the weather. 2 : to make a formal accusation or charge He threatened to complain of him to the captain.', 'Isaiah L. Smith', 'gmhs13@yopmail.com', 'dafsgd'),
(3, 'redtfyguhijo', 'simanto', 'gmhs13@yopmail.com', 'ytguijopk[');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(10) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `image` text NOT NULL,
  `department` varchar(50) NOT NULL,
  `biography` varchar(255) NOT NULL,
  `times` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `first_name`, `last_name`, `email`, `dob`, `gender`, `address`, `phone`, `image`, `department`, `biography`, `times`) VALUES
(16, 'test', 'test', 't2YY.cc', '22-22-81', 'male', 'shhdgnghd', '12345678', '', 'rt', 'et', '9-10,10-11,11-12'),
(31, 'simanto', 'ahmd', 'simantoahmd82@gmail.com', '20/02/2015', 'male', '3125  Elkview Drive, Miami,33169', '7865641399', 'doctor-thumb-06.jpg', 'Orthopedics', 'adjakdw', '9-10,10-11,19-20,20-21'),
(33, 'ascasc', 'ascasc', 'jamiltarif3@gmail.com', '13/03/2020', 'male', 'ascascasc', 'ascascascascasc', 'second.PNG', 'Neurology', 'ascascascasc', '');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `salary` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `email`, `contact`, `join_date`, `role`, `salary`) VALUES
(10, 'simanto', 'gmhs13@yopmail.com', '8801712345', '20/12/2019', 'Accountant', '5000'),
(11, 'Isaiah L. Smith', 'gmhs13@yopmail.com', '8801712345', '20/12/2019', 'Pharmacist', '10000');

-- --------------------------------------------------------

--
-- Table structure for table `fee`
--

CREATE TABLE `fee` (
  `fid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `details` varchar(255) NOT NULL,
  `count` int(11) NOT NULL,
  `pp` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fee`
--

INSERT INTO `fee` (`fid`, `pid`, `details`, `count`, `pp`) VALUES
(4, 1, 'Napa', 10, 20),
(5, 1, 'Napa-Extra', 40, 80),
(6, 21, 'Napa', 10, 20);

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(10) NOT NULL,
  `employee` varchar(255) NOT NULL,
  `emp_id` int(10) NOT NULL,
  `leave_type` varchar(255) NOT NULL,
  `date_from` varchar(255) NOT NULL,
  `date_to` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `employee`, `emp_id`, `leave_type`, `date_from`, `date_to`, `reason`) VALUES
(2, 'B.Rabbit', 1, 'Medical Leave', '05/03/2020', '07/03/2020', 'sick'),
(6, 'B.Rabbit', 1, 'Casual Leave', '17/03/2020', '16/03/2020', 'ajbsdxn.am');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'gmhs13@yopmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `medicine`
--

CREATE TABLE `medicine` (
  `mid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double NOT NULL DEFAULT 0,
  `count` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicine`
--

INSERT INTO `medicine` (`mid`, `name`, `price`, `count`) VALUES
(1, 'Napa', 2, 80),
(2, 'Napa-Extra', 2, 60);

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `cause` varchar(255) NOT NULL,
  `fee` double NOT NULL,
  `report` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `address`, `cause`, `fee`, `report`) VALUES
(1, 'BAshundhara', 'Cold', 0, 'no report'),
(20, '', '', 0, ''),
(21, 'Nikunja-2 ggg', 'Corona', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `p_date` varchar(255) NOT NULL,
  `expire` varchar(255) NOT NULL,
  `expire_end` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `p_date`, `expire`, `expire_end`, `price`, `quantity`) VALUES
(2, 'flazil', '12/03/2020', '2', '10/03/2020', '8', '200');

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `temp`
--

INSERT INTO `temp` (`id`, `email`, `token`) VALUES
(3, 'gmhs13@yopmail.com', 'mc7g0akj'),
(3, 'gmhs13@yopmail.com', 'ozgknumr'),
(3, 'gmhs13@yopmail.com', 'oup35ut2'),
(3, 'gmhs13@yopmail.com', 'wjw4ntrj'),
(3, 'gmhs13@yopmail.com', 'p3m3jobc'),
(3, 'gmhs13@yopmail.com', '9bu1ijnu'),
(3, 'gmhs13@yopmail.com', 'y5k0bjbj'),
(3, 'gmhs13@yopmail.com', 'xdv84cku'),
(3, 'gmhs13@yopmail.com', 'irrxz8bs'),
(3, 'gmhs13@yopmail.com', '07x7w8ot'),
(12, 'simantoahmd82@gmail.com', 'xeg8q2yq'),
(1, 't@t.com', 'wa0vyei0'),
(17, 'jamiltarif3@gmail.com', '3ark35kn');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'patient',
  `email_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `status`, `email_status`) VALUES
(1, 't', 't@t.com', '1234', 'patient', 'verified'),
(8, 'zihad', 'zihad@yopmail.com', '123', '', 'not_verified'),
(9, 'zihad', 'zihad.1d@yopmail.com', '1234', '', 'verified'),
(12, 'simanto', 'simantoahmd82@gmail.com', '12345', '', 'verified'),
(13, 'abc', 'abc@yopmail.com', '12345', '', 'verified'),
(14, 'sajid', 'sajidsalim46@gmail.com', '123', '', 'not_verified'),
(15, 'abid', 'iftiabid123@gmail.com', '123', '', 'verified'),
(16, 'dt', 'dt@t.com', '123', 'doctor', 'verified'),
(17, 'jam', 'jamiltarif3@gmail.com', '123', 'patient', 'verified'),
(18, 'jam', 'jamiltarif3@gmail.com', '123', '', 'not_verified'),
(20, 'abc', 'a@a.com', '123', 'patient', 'verified'),
(21, 'n', 'ni.xeron07@gmail.com', '1234', 'patient', 'verified');

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `verify`
--

INSERT INTO `verify` (`id`, `username`, `email`, `token`) VALUES
(4, 'zihad', 'zihad.1d@yopmail.com', 'lp5ux5ik'),
(8, 'abc', 'abc@yopmail.com', '51fxcqmf'),
(9, 'sajid', 'sajidsalim46@gmail.com', 'yhfzuil8'),
(10, 'abid', 'iftiabid123@gmail.com', 'buidvkbn'),
(11, 'jam', 'jamiltarif3@gmail.com', 'm1hskinb'),
(12, 'jam', 'jamiltarif3@gmail.com', 'ic04r34p'),
(13, 'abc', 'a@a.com', 'yakdp3x5'),
(14, 'abc', 'a@a.com', '2tcp0g61'),
(15, 'n', 'ni.xeron07@gmail.com', 'j27e77vb');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complain`
--
ALTER TABLE `complain`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fee`
--
ALTER TABLE `fee`
  ADD PRIMARY KEY (`fid`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `complain`
--
ALTER TABLE `complain`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `fee`
--
ALTER TABLE `fee`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `medicine`
--
ALTER TABLE `medicine`
  MODIFY `mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `verify`
--
ALTER TABLE `verify`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
