DROP DATABASE IF EXISTS legos;
CREATE DATABASE legos;
USE legos;

CREATE TABLE users (
  id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(32) NOT NULL,
  date_of_birth DATE NOT NULL,
  building_experience BIT(2) UNSIGNED,
);

CREATE TABLE reviews (
  id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  product_id BIGINT UNSIGNED NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  rating BIT(3) NOT NULL,
  would_recommend BOOLEAN NOT NULL,
  purchased_for BIT(2),
  headline VARCHAR(32) NOT NULL,
  review VARCHAR(255) NOT NULL,
  is_helpful TINYINT UNSIGNED DEFAULT 0,
  is_not_helpful TINYINT UNSIGNED DEFAULT 0,
  play_experience BIT(3),
  level_of_difficulty BIT(3),
  value_for_money BIT(3),
  build_time TINYINT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
