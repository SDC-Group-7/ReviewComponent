# Lego Review Component`

## Setup Instructions

clone and initialize repo
```sh
git clone https://github.com/SDC-Group-7/ReviewComponent.git
cd ReviewComponent
npm i
```

configure the following environment variables
```sh
DB_HOST="[your db host address]"
DB_USER="[your db username]"
DB_PASS="[your db password]"
DB_NAME="legos"
```

optional: add environment variables to `~/.bash_profile`
```sh
echo "export DB_HOST=\"$DB_HOST\"" >> ~/.bash_profile
echo "export DB_USER=\"$DB_USER\"" >> ~/.bash_profile
echo "export DB_PASS=\"$DB_PASS\"" >> ~/.bash_profile
echo "export DB_NAME=\"$DB_NAME\"" >> ~/.bash_profile
```

initialize and seed database
```sh
npm run init_db
npm run seed_db
npm run build
npm run test
npm start
```

## Server API

### Get a review
  * GET `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` review id

**Success Status Code:** `200`

**Returns**: JSON of review

```
{
  id:                  Number,
  product_id:          Number,
  created_at:          Date,
  name:                String,
  headline:            String,
  review:              String,
  would_recommend:     Boolean,
  rating:              Number,
  is_helpful:          Number,
  is_not_helpful:      Number,
  age_group:           Number || null, 
  building_experience: Number || null,
  purchased_for:       Number || null,
  play_experience:     Number || null,
  level_of_difficulty: Number || null,
  value_for_money:     Number || null,
  build_time:          Number || null
}
```

---

### Get all reviews for product
  * GET `/api/products/:product_id/reviews`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `200`

**Returns:** JSON Array of reviews joined with users who wrote them

```
[{
  id:                  Number,
  product_id:          Number,
  created_at:          Date,
  name:                String,
  headline:            String,
  review:              String,
  would_recommend:     Boolean,
  rating:              Number,
  is_helpful:          Number,
  is_not_helpful:      Number,
  age_group:           Number || null, 
  building_experience: Number || null,
  purchased_for:       Number || null,
  play_experience:     Number || null,
  level_of_difficulty: Number || null,
  value_for_money:     Number || null,
  build_time:          Number || null
}, ...]
```

---

### Add review for a product
  * POST `/api/products/:product_id/reviews/`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `201`

**Request Body**: Expects JSON in the following format.

```
{
  name:                String,
  headline:            String,
  review:              String,
  would_recommend:     Boolean,
  rating:              Number,
  age_group:           Number || null,
  building_experience: Number || null,
  purchased_for:       Number || null,
  play_experience:     Number || null,
  level_of_difficulty: Number || null,
  value_for_money:     Number || null,
  build_time:          Number || null
}
```

---

### Update a review to mark/unmark as helpful/not-helpful
  * PUT `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` review id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following format

```
{
  feedback: "is_helpful" || "is_not_helpful",
  action: "+" || "-"
}
```

**Returns**: JSON of modified review

```
{
  id:                  Number,
  product_id:          Number,
  created_at:          Date,
  name:                String,
  headline:            String,
  review:              String,
  would_recommend:     Boolean,
  rating:              Number,
  is_helpful:          Number,
  is_not_helpful:      Number,
  age_group:           Number || null, 
  building_experience: Number || null,
  purchased_for:       Number || null,
  play_experience:     Number || null,
  level_of_difficulty: Number || null,
  value_for_money:     Number || null,
  build_time:          Number || null
}

```

---

### Delete a review
  * DELETE `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` review id

**Success Status Code:** `204`
