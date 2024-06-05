-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 01, 2024 at 12:07 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cookieApi`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Mobile', '2024-05-21 06:52:02', '2024-05-21 06:52:02'),
(2, 'Car', '2024-05-23 02:03:47', '2024-05-23 02:03:47'),
(3, 'Bike', '2024-05-23 02:04:05', '2024-05-23 02:04:05'),
(4, 'Animal', '2024-05-23 02:04:42', '2024-05-23 02:04:42'),
(5, 'Property', '2024-05-23 02:04:58', '2024-05-23 02:04:58'),
(6, 'Electronic', '2024-05-23 02:05:58', '2024-05-23 02:05:58');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_06_083643_create_categories_table', 1),
(6, '2024_03_07_062534_create_products_table', 1),
(7, '2024_03_11_211520_create_favorites_table', 1),
(8, '2024_03_18_081423_create_reports_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `location` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `user_id`, `location`, `title`, `price`, `description`, `images`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 'Islamabad', 'iphone 8 plus', '500000', 'iphone 8 plus pta approved 256Gb 79% battery Health Conditions new urgent Sale krna ha Exchange b hojayeGa', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448069_iphone_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448069_iphone.jpg\"]', '2024-05-23 02:07:49', '2024-05-23 02:07:49'),
(3, 2, 1, 'Lahore', 'mehran 2001', '2300000', 'Suzuki mehran\r\nLahore number\r\ngood condition\r\noriginal book\r\noriginal file\r\noriginal smart card\r\nlifetime token paid\r\nbiometric on the spot\r\nall documents clear\r\nengine OK', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448270_mehran3.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448270_mehran2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448270_mehran1.jpg\"]', '2024-05-23 02:11:10', '2024-05-23 02:11:10'),
(4, 3, 1, 'Karachi', 'Honda 125', '200000', '10 By 10 \r\n100 %Ok \r\nBrand New \r\nBike 2980 Km Drive \r\nModel 2023', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448374_honda125_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448374_honda125_1.jpg\"]', '2024-05-23 02:12:54', '2024-05-23 02:12:54'),
(5, 4, 1, 'Hyderabad', 'asla murgha', '120000', 'asal murgha pure fighter ss', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448475_murgha_2.jpeg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448475_murgha1.jpg\"]', '2024-05-23 02:14:35', '2024-05-29 02:37:58'),
(6, 5, 1, 'Peshawar', 'Beautiful Kanal House for sale', '54000000', 'Citi Housing Gujranwala \r\nKanal House for sale \r\nbeautiful location \r\nbasic amenities \r\nnear school Masjid and commercial \r\nall facilities on walk', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448830_house_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448830_house_1.jpg\"]', '2024-05-23 02:20:30', '2024-05-23 02:20:30'),
(7, 6, 1, 'Multan', 'House Hold Appliances', '450005', 'Combo Offer\r\nWe will give combo offer House Hold items\r\nA Set Contains\r\n1 No. of Mushroom Mosquito Trapper\r\n1 No. of Electric Lunch Box. 1 No. of Hot Water Bag for Joint/Muscle Pain.Price of these set is Rs. 1950/ and Courier Charge Extra.', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448965_elec_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716448965_elec_1.jpg\"]', '2024-05-23 02:22:45', '2024-05-23 02:22:45'),
(8, 1, 3, 'Karachi', 'samsung s23 ultra& Z fold 4 pta approved', '210000', 'fixed priced discount walle hazrat rabta na karei no exchange \r\n\r\nsamsung S23 ultra pta approved 256gb 8g brand new condition water pack seeld just like boxed open 100 USA stocked A triple plus piece 10 days shop warranty Laveder clour vip short clour', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716449244_samsungs23_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716449244_samsung_s23_1.jpeg\"]', '2024-05-23 02:27:24', '2024-05-23 02:27:24'),
(9, 2, 3, 'Mehrabpur', 'tinted glass, car wraps , ppf - CIVIC, GRANDE , ALTO', '4500000', 'PPF Roll Coating Rolls and Films\r\nCar Wrap rolls all Colours\r\nAll Car Glasses Tinted \r\nQuarter full car glsses\r\nWind screen to Back Glass\r\nPrices are different as per your requirements \r\nUsa America and Thailand made product', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716449352_civic2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716449352_civic1.jpg\"]', '2024-05-23 02:29:12', '2024-05-23 02:29:12'),
(10, 3, 3, 'Peshawar', 'Honda CD 70 2021 Model', '104000', 'I Want To Selling  My Honda CD 70 \r\n>,Location OKARA\r\n>;Non Accidental\r\n>;Unregistered\r\n>;Milage 7000 KM\'s driven\r\n>;Engine Type 2 Stroke\r\n>;Engine Capacity 70cc\r\n>;Model 2021\r\n>;No Work Required At All\r\n>;Demanding Price (View phone number)', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450691_honda70_2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450691_honda70_1.jpg\"]', '2024-05-23 02:51:31', '2024-05-23 02:51:31'),
(11, 4, 3, 'Rawalpindi', 'Breeding Love Birds', '78000', 'In G-13 Islamabad\r\n\r\nAll birds will be sold together\r\n\r\nTotal Birds = 47\r\n\r\nDemand: 10 lac', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450755_birds_1.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450755_bird_2.png\"]', '2024-05-23 02:52:35', '2024-05-23 02:52:35'),
(12, 5, 3, 'Karachi', 'Get In Touch Now To Buy A 14 Marla', '12500000', 'Properties, right now, are at the best rates so a price of PKR Rs(View phone number) is reasonable when it comes to recently developed properties. Here is a must see property if you\'re looking for a proper deal in Punjab Small', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450850_house_4.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716450850_house_3.jpg\"]', '2024-05-23 02:54:10', '2024-05-23 02:54:10'),
(13, 6, 3, 'Skardu', 'ommon Electronic Devices', '540000', 'In today’s digital age, electronic devices have become an integral part of our daily lives. From smartphones to laptops, smartwatches to gaming consoles, we rely on these devices to stay', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716451191_elec_4.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1716451191_elec_3.jpg\"]', '2024-05-23 02:59:51', '2024-05-23 02:59:51'),
(23, 1, 13, 'Hyderabad', 'Apple Iphone 14 pro max avail', '4000000', 'apple iPhone available on easiest of plans in market, Just pick a model of your choice from market we will lease that model for', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048381_new6.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048381_new5.jpg\"]', '2024-05-30 00:53:01', '2024-05-30 00:53:01'),
(24, 5, 13, 'Islamabad', '7 Marla Brand-new Luxury House For Sale In Gulraiz 2', '9050000', 'Welcome to Real Estate Naama And Builders\r\n7 Marla brandnew luxury house for sale having 2 master bedrooms with attached bathroom,Living Area,American kitchen ,Drawing Room with', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048477_house6.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048477_house5 .jpg\"]', '2024-05-30 00:54:37', '2024-05-30 00:54:37'),
(25, 2, 13, 'Rawalpindi', 'Hilux Revo', '9300000', '1. onn my name\r\n2. isb no\r\n3. ful option variant V\r\nsorry frm dealers n properties adjustment \r\njust one fender touch rest total geniue\r\n4. transfer must', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048594_newCar4.jpeg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048594_newCar3.jpg\"]', '2024-05-30 00:56:34', '2024-05-30 00:56:34'),
(26, 3, 13, 'Skardu', 'unique bike 2024', '120000', 'new bike no used need  money that way going to sell out this', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048798_unique2.jpg\"]', '2024-05-30 00:59:58', '2024-05-30 00:59:58'),
(27, 4, 13, 'Karachi', 'lion both are strange', '8000000', 'imported lion form abort', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048932_lion2.png\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717048932_lion.jpg\"]', '2024-05-30 01:02:12', '2024-05-30 01:02:12'),
(28, 6, 13, 'Islamabad', 'fan electrics', '70000', 'charg and use with normal electrict and cahreg', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717049006_fan2.jpeg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717049006_fan.jpg\"]', '2024-05-30 01:03:26', '2024-05-30 01:03:26'),
(29, 1, 14, 'Mardan', 'google pixla', '300000', 'exchange posible to any iphone no issue in mobile', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717049337_new4.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717049337_new3.jpg\"]', '2024-05-30 01:08:57', '2024-05-30 01:08:57'),
(30, 2, 14, 'Lahore', 'Honda City IVTEC 2018', '3400000', 'Honda city ivtec Model 18\r\nTotal genuine \r\nAll token clear\r\nfog lamps installed', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717050586_new6.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717050586_nea5.jpg\"]', '2024-05-30 01:29:46', '2024-05-30 01:29:46'),
(31, 3, 14, 'Peshawar', 'supper bike', '320000', 'imported from Germany new 2022 model', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717050858_supperBike2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717050858_supperBike.jpg\"]', '2024-05-30 01:34:18', '2024-05-30 01:34:18'),
(32, 4, 14, 'Alik Ghund', 'birds asli', '90000', 'birds for sell original and healthy no foolish offer please', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053488_birds4.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053488_birds3.jpg\"]', '2024-05-30 02:18:08', '2024-05-30 02:18:08'),
(34, 5, 14, 'Karachi', 'House 7 Marla near park', '1230000', '7 Marla house on very reasonable price \r\nurgent for sale', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053657_house9.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053657_house8.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053657_house6.jpg\"]', '2024-05-30 02:20:57', '2024-05-30 02:20:57'),
(35, 6, 14, 'Lahore', '72,158 Refrigerator Stock Photos', '3400000', 'Get this image on: Dreamstime.com | License details\r\nCopyright: Todd Taulman | Dreamstime.com\r\nWant to know where this information comes from? Learn more', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053956_elec7.png\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717053956_elec6.jpg\"]', '2024-05-30 02:25:56', '2024-05-30 02:25:56'),
(36, 1, 15, 'Karachi', 'samsung', '23000', 'samsung black colour PTA aprove', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717055544_new2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717055544_new1.jpg\"]', '2024-05-30 02:52:24', '2024-05-30 02:52:24'),
(37, 1, 16, 'Karachi', 'i phone 13 pro max', '4000000', 'new no used import form USA 100% battery health', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717180796_new6.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717180796_new5.jpg\"]', '2024-05-31 13:39:56', '2024-05-31 13:39:56'),
(38, 2, 16, 'Islamabad', 'new model', '780000', 'for sell new condition 10 month use only', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717180993_newCar2.jpeg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717180993_newCar1.jpg\"]', '2024-05-31 13:43:13', '2024-05-31 13:43:13'),
(39, 2, 16, 'Lahore', 'civic modify car', '23000', 'personal use kaly bnaya hy fresh car hy no any kind of problem', '[\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717181164_civicModify2.jpg\",\"http:\\/\\/localhost:8000\\/storage\\/uploads\\/1717181164_civicModify1.jpg\"]', '2024-05-31 13:46:04', '2024-05-31 13:46:04');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `resion` varchar(255) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `resion`, `product_id`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 'no', 30, 16, '2024-05-31 13:49:49', '2024-05-31 13:49:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `phone`, `bio`, `gender`, `dob`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'test@example.com', 'user', '2024-05-21 06:52:02', '03453232603', 'nothing special', 'Male', '2000-01-01', '$2y$12$UpeJmmnbdhmDUS/CMd2dvuIFePzLTVuxmDRciDTMVP/V61GCLLBgW', '78GDKoM3skou0rHSnKvPb3JMmFFR9akDISMtDrswbvjXlQOzTYfgrUgeEHwd', '2024-05-21 06:52:02', '2024-05-21 06:52:02'),
(2, 'Admin', 'admin@gmail.com', 'admin', NULL, NULL, NULL, 'Male', '2024-05-24', '$2y$12$NBRMCXzbTNT2OWLrNIiD5..kKbfVMmVHCAikCP72ZQPc8tDKBLiIW', NULL, '2024-05-23 02:03:08', '2024-05-23 02:03:08'),
(3, 'user', 'user@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-14', '$2y$12$F/zX8S/bjnFr3THU08ybAOafucIQJR8.R1IZf5rbTItXMr9MA4ZnG', NULL, '2024-05-23 02:23:25', '2024-05-23 02:23:25'),
(4, 'muhammad khan', 'khan@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-01', '$2y$12$Otyh2E/FsVACQSuO9xQHYeQPzTznfvhtIs8QUEvfaApPUPayOygGa', NULL, '2024-05-28 02:39:53', '2024-05-28 02:39:53'),
(5, 'Architecto illum do', 'dopymew@mailinator.com', 'user', NULL, '88', 'Dolor non perferendi', 'Male', '2007-04-18', '$2y$12$4pX7qv0YMM2hX25Qrct.nuY/ZVen8JwpkkErn7Vrsg3fFT5MiG.HO', NULL, '2024-05-28 14:25:45', '2024-05-28 14:25:45'),
(6, 'Quia asperiores qui', 'qidop@mailinator.com', 'user', NULL, '32', 'Sint nihil inventor', 'Female', '1981-07-22', '$2y$12$dXW/9TDDBUQBPOcTpt4DvOZzY/DHk2VaN9Joj0vZRwpKLyVyrV03.', NULL, '2024-05-28 14:31:42', '2024-05-28 14:31:42'),
(7, 'Aut architecto nostr', 'wyjicipugy@mailinator.com', 'user', NULL, '7', 'Quisquam nulla magni', 'Male', '2004-10-28', '$2y$12$S2WINBgwLo01JKmOe5dUZ.DtB5oTijfZEL7eb6UqYVV5z/A1mw./y', NULL, '2024-05-28 14:56:53', '2024-05-28 14:56:53'),
(8, 'Esse et obcaecati ve', 'sociwybosy@mailinator.com', 'user', NULL, '9', 'Explicabo Sit possi', 'Male', '1997-12-08', '$2y$12$.3xRFavAseUt28uwozo6xObfQ8U3cr86nDeOsoZ90f2U/gglzBbQa', NULL, '2024-05-28 14:57:39', '2024-05-28 14:57:39'),
(9, 'Ut voluptates illo h', 'juji@mailinator.com', 'user', NULL, '91', 'Molestiae facilis qu', 'Male', '1989-10-07', '$2y$12$qJauIC4zALG2OfdCTK.U.eO//xpihl2tXw7tMry035jiQqDIUh276', NULL, '2024-05-28 14:59:33', '2024-05-28 14:59:33'),
(10, 'Sint illum qui repu', 'notaho@mailinator.com', 'user', NULL, '93', 'Voluptate impedit a', 'Male', '1971-07-05', '$2y$12$Ddj2Ex7OoQ3DIfl.H2H2LOwQNZ7ZD9IU8B2ck8PfZzd1dKHXYizeK', NULL, '2024-05-28 15:03:20', '2024-05-28 15:03:20'),
(11, 'Non id aut temporibu', 'ravikowuxe@mailinator.com', 'user', NULL, '59', 'Architecto voluptate', 'Female', '1998-05-18', '$2y$12$VEoPfMcvlrawIzSleNSY8O4t0tNX3tLMh5ADWNUrRMyJoyTW6MDoi', NULL, '2024-05-28 15:08:38', '2024-05-28 15:08:38'),
(12, 'Eveniet culpa dolor', 'picipoha@mailinator.com', 'user', NULL, '59', 'Proident dolorem si', 'Male', '2022-12-23', '$2y$12$p6FR5NtcKEnYQlOa75hS9eG1i6orZgMtAOe2zyyPzQW8859XvVjeS', NULL, '2024-05-28 15:12:12', '2024-05-28 15:12:12'),
(13, 'sajjad', 'sajjad@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-17', '$2y$12$8mK776T..lf72/8MU0xlluKgBqhLQYNdGcEdR2WefWlITRHMNAowi', NULL, '2024-05-30 00:44:54', '2024-05-30 00:44:54'),
(14, 'fawad khan', 'fawad@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-09', '$2y$12$MuSRgupI8udfl0M93sJURuV1buCsX23ybK/p8HI70F0xPb1qqCHy.', NULL, '2024-05-30 01:06:37', '2024-05-30 01:06:37'),
(15, 'khalid', 'khalid@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-18', '$2y$12$.UqxX7Pr1EXDjuRgHoXlLeUEYSy.Sc6NYF6YTS/gg4fGoJ4qiJj/i', NULL, '2024-05-30 02:48:09', '2024-05-30 02:48:09'),
(16, 'kamran', 'kamran@gmail.com', 'user', NULL, NULL, NULL, 'Male', '2024-05-08', '$2y$12$9myHlt1Yg0zLQC5QeBXOR.kRW9a9VqRtSMbRa9pj.V4gdT/E0jiIG', NULL, '2024-05-31 13:37:11', '2024-05-31 13:37:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_product_id_foreign` (`product_id`),
  ADD KEY `favorites_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_user_id_foreign` (`user_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reports_product_id_foreign` (`product_id`),
  ADD KEY `reports_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favorites_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
