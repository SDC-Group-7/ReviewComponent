DROP DATABASE IF EXISTS legos;
CREATE DATABASE legos;
USE legos;

CREATE TABLE users (
	id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
  experience TINYINT UNSIGNED NOT NULL 
);

CREATE TABLE reviews (
	id BIGINT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user_id BIGINT UNSIGNED NOT NULL,
	product_id BIGINT UNSIGNED NOT NULL,
	created_at DATE NOT NULL DEFAULT CURRENT_DATE,
	rating BIT(3) NOT NULL,
	recommended BOOLEAN NOT NULL,
	subject VARCHAR(50) NOT NULL,
	description VARCHAR(1550) NOT NULL,
	is_helpful BIGINT UNSIGNED DEFAULT 0,
	is_not_helpful BIGINT UNSIGNED DEFAULT 0,
	play_experience BIT(3) NOT NULL,
	difficulty BIT(3) NOT NULL,
	value BIT(3) NOT NULL,
	build_time TINYINT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
