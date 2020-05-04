const users = [{ name: 'Adolph', age: 97 }, { name: 'Pinkie', age: 34 }, { name: 'Lonna', age: 104 }, { name: 'Casey', age: 57 }, { name: 'Alvaro', age: 75 }];

const products = [
  { name: 'batman' }, { name: 'superman' }, { name: 'luke' }, { name: 'leia' }, { name: 'robin' },
];

const experiences = [
  {
    play_experience: 4, difficulty: 4, value: 5, build_time: 5,
  },
  {
    play_experience: 2, difficulty: 5, value: 1, build_time: 50,
  },
  {
    play_experience: 4, difficulty: 2, value: 4, build_time: 18,
  },
  {
    play_experience: 4, difficulty: 1, value: 3, build_time: 2,
  },
  {
    play_experience: 5, difficulty: 5, value: 5, build_time: 15,
  },
];

const reviews = [
  {
    rating: 5, recommended: 1, subject: 'lorum ipsum 1', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 1, user_id: 1,
  },
  {
    rating: 4, recommended: 1, subject: 'lorum ipsum 2', is_helpful: 3, is_not_helpful: 4, product_id: 1, experience_id: 2, user_id: 2,
  },
  {
    rating: 4, recommended: 1, subject: 'lorum ipsum 3', is_helpful: 0, is_not_helpful: 9, product_id: 1, experience_id: 3, user_id: 3,
  },
  {
    rating: 1, recommended: null, subject: 'lorum ipsum 4', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 4, user_id: 4,
  },
  {
    rating: 2, recommended: null, subject: 'lorum ipsum 5', is_helpful: 2, is_not_helpful: 1, product_id: 1, experience_id: 5, user_id: 5,
  },
];

const images = [
  { url: 'localhost', review_id: 1 },
  { url: 'localhost', review_id: 1 },
  { url: 'localhost', review_id: 1 },
];

//  SELECT image_url from image table inner join reference table on image_id = reference.image_id
//  inner join product on product.id = reference.product_id where product.id = 1
//  reference table
//  id     product_id   image_id
//  1     1                2
//  2     1                3
//  3     1                5
//  4     1                6
//  5     2                2
//  6     2                4

// image table
// id .  image url
// 1       www...
// 2       www..
// 3       www...
// 4       www...
// 5       www...

// product table
// id
// 1
// 2
// 3
// 4
// 5

// create your product
// create your images

// for (let i = 0; i < 100; i += 1) {
//   randomImageCount = // get random number
//   // loop through the image count
//   //    get 5 unique image id's
//   //    insert reference with i, unique image id
// }
// for each product
// get a random number of images to attach to the product
// create reference
// insert reference (product_id, image_id) values (1, 4)
// insert reference (product_id, image_id) values (1, 6)
// insert reference (product_id, image_id) values (1, 2)
// insert reference (product_id, image_id) values (1, 9)

// insert reference (product_id, image_id) values (2, 2)
// insert reference (product_id, image_id) values (2, 1)
// insert reference (product_id, image_id) values (2, 8)
// insert reference (product_id, image_id) values (2, 3)

module.exports = {
  users,
  images,
  products,
  reviews,
  experiences,
};
