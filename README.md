# Lego Review Component

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

```json
{
  id: Number,
  user_id: Number,
  product_id: Number,
  createdAt: Date,
  rating: Number,
  recommended: Boolean,
  subject: String,
  description: String,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty: Number,
  value: Number,
  build_time: Number,
}
```

### Update a review to mark/unmark as helpful/not-helpful
  * PUT `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` review id

**Success Status Code:** `201`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
{
  feedback: "is_helpful" || "is_not_helpful",
  action: "+" || "-"
}
```

**Returns**: JSON of modified review

```json
{
  id: Number,
  user_id: Number,
  product_id: Number,
  createdAt: Date,
  rating: Number,
  recommended: Boolean,
  subject: String,
  description: String,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty: Number,
  value: Number,
  build_time: Number,
}
```

### Delete a review
  * DELETE `/api/reviews/:review_id`

**Path Parameters:**
  * `review_id` review id

**Success Status Code:** `204`

### Add review for a product
  * POST `/api/products/:product_id/reviews/`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `201`

**Request Body**: Expects JSON in the following format.

```json
{
  user_id: Number,
  rating: Number,
  recommended: Boolean,
  subject: String,
  description: String,
  play_experience: Number,
  difficulty: Number,
  value: Number,
  build_time: Number,
}
```

### Get all reviews for product
  * GET `/api/products/:product_id/reviews`

**Path Parameters:**
  * `product_id` product id

**Success Status Code:** `200`

**Returns:** JSON Array of reviews joined with users who wrote them

```json
[{
  id: Number,
  user: {
    id: Number,
    name: String,
    experience: Number
  },
  product_id: Number,
  createdAt: Date,
  rating: Number,
  recommended: Boolean,
  subject: String,
  description: String,
  is_helpful: Number,
  is_not_helpful: Number,
  play_experience: Number,
  difficulty: Number,
  value: Number,
  build_time: Number,
}, ...]
```
