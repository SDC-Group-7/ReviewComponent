CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  age_group SMALLINT CHECK(age_group >= 0 AND age_group < 10),
  building_experience SMALLINT CHECK(building_experience >= 0 AND building_experience < 4)
);

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users,
  product_id BIGINT NOT NULL,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  headline VARCHAR(32) NOT NULL,
  review VARCHAR(1023) NOT NULL,
  would_recommend BOOLEAN NOT NULL,
  rating SMALLINT NOT NULL CHECK(rating > 0 AND rating < 6),
  is_helpful SMALLINT DEFAULT 0,
  is_not_helpful SMALLINT DEFAULT 0,
  purchased_for SMALLINT CHECK(purchased_for >= 0 AND purchased_for < 3),
  play_experience SMALLINT CHECK(play_experience > 0 AND play_experience < 6),
  level_of_difficulty SMALLINT CHECK(level_of_difficulty > 0 AND level_of_difficulty < 6),
  value_for_money SMALLINT CHECK(value_for_money > 0 AND value_for_money < 6),
  build_time SMALLINT
);
