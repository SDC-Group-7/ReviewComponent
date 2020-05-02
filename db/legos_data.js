var users = [{'name': 'Adolph', 'age': 97}, {'name': 'Pinkie', 'age': 34}, {'name': 'Lonna', 'age': 104}, {'name': 'Casey', 'age': 57}, {'name': 'Alvaro', 'age': 75}, {'name': 'Nan', 'age': 98}, {'name': 'Louisa', 'age': 101}, {'name': 'Kimbery', 'age': 21}, {'name': 'Esmera', 'age': 23}, {'name': 'Layne', 'age': 44}, {'name': 'Vernia', 'age': 48}, {'name': 'Ty', 'age': 62}, {'name': 'Tomas', 'age': 85}, {'name': 'Lynn', 'age': 9}, {'name': 'Kati', 'age': 8}, {'name': 'Wyatt', 'age': 30}, {'name': 'Derick', 'age': 85}, {'name': 'Isabel', 'age': 60}, {'name': 'Gabriela', 'age': 38}, {'name': 'Hyun', 'age': 94}, {'name': 'Stella', 'age': 70}, {'name': 'Chia', 'age': 96}, {'name': 'Barabara', 'age': 92}, {'name': 'Hiram', 'age': 53}, {'name': 'Anibal', 'age': 34}, {'name': 'Odelia', 'age': 103}, {'name': 'Tonie', 'age': 88}, {'name': 'Jesica', 'age': 9}, {'name': 'Yolonda', 'age': 23}, {'name': 'Marvella', 'age': 87}, {'name': 'Tilda', 'age': 100}, {'name': 'Estell', 'age': 104}, {'name': 'Donella', 'age': 38}, {'name': 'Jacelyn', 'age': 74}, {'name': 'Charla', 'age': 72}, {'name': 'Sherie', 'age': 26}, {'name': 'Arnoldo', 'age': 32}, {'name': 'Garren', 'age': 12}, {'name': 'Genna', 'age': 5}, {'name': 'Jana', 'age': 26}, {'name': 'Ida', 'age': 90}, {'name': 'Karen', 'age': 12}, {'name': 'Jenise', 'age': 101}, {'name': 'Elijah', 'age': 33}, {'name': 'Mariella', 'age': 34}, {'name': 'Belia', 'age': 90}, {'name': 'Kayla', 'age': 72}, {'name': 'Milton', 'age': 8}, {'name': 'Sunni', 'age': 12}, {'name': 'Gelald', 'age': 103}, {'name': 'Toi', 'age': 49}, {'name': 'Gilma', 'age': 77}, {'name': 'Heriberto', 'age': 59}, {'name': 'Hyacinth', 'age': 89}, {'name': 'Shirly', 'age': 44}, {'name': 'September', 'age': 59}, {'name': 'Aurora', 'age': 6}, {'name': 'Domitila', 'age': 67}, {'name': 'Ossie', 'age': 80}, {'name': 'Iesha', 'age': 37}, {'name': 'Garline', 'age': 66}, {'name': 'Sylvester', 'age': 36}, {'name': 'Glory', 'age': 14}, {'name': 'Maybell', 'age': 25}, {'name': 'Anamaria', 'age': 35}, {'name': 'Tabitha', 'age': 27}, {'name': 'Zandra', 'age': 95}, {'name': 'Stacie', 'age': 98}, {'name': 'Vicenta', 'age': 27}, {'name': 'Marisela', 'age': 92}, {'name': 'Jistina', 'age': 40}, {'name': 'Tatum', 'age': 94}, {'name': 'Elda', 'age': 16}, {'name': 'Kelsi', 'age': 41}, {'name': 'Jannie', 'age': 19}, {'name': 'Ivey', 'age': 8}, {'name': 'Sherman', 'age': 68}, {'name': 'Darryl', 'age': 104}, {'name': 'Alethia', 'age': 97}, {'name': 'Sharon', 'age': 46}, {'name': 'Arlie', 'age': 100}, {'name': 'Palma', 'age': 70}, {'name': 'Jannie', 'age': 29}, {'name': 'Ivey', 'age': 18}, {'name': 'Sherman', 'age': 28}, {'name': 'Darryl', 'age': 124}, {'name': 'Alethia', 'age': 27}, {'name': 'Sharon', 'age': 36}, {'name': 'Arlie', 'age': 110}, {'name': 'Palma', 'age': 20}, {'name': 'Palma', 'age': 70}, {'name': 'Jannie', 'age': 29}, {'name': 'Ivey', 'age': 18}, {'name': 'Sherman', 'age': 28}, {'name': 'Darryl', 'age': 124}, {'name': 'Alethia', 'age': 27}, {'name': 'Sharon', 'age': 36}, {'name': 'Arlie', 'age': 110}, {'name': 'Page', 'age': 20}, {'name': 'Jack', 'age': 20}];

var products = [
  {name: 'batman'}, {name: 'superman'}, {name: 'luke'}, {name: 'leia'}, {name: 'robin'}
];

var experiences = [
  {play_experience: 4, difficulty: 4, value: 5, build_time: 5},
  {play_experience: 2, difficulty: 5, value: 1, build_time: 50},
  {play_experience: 4, difficulty: 2, value: 4, build_time: 18},
  {play_experience: 4, difficulty: 1, value: 3, build_time: 2},
  {play_experience: 5, difficulty: 5, value: 5, build_time: 15},
];

var reviews = [
  {rating: 5, recommended: 1, subject: 'lorum ipsum 1', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 1, user_id: 1},
  {rating: 4, recommended: 1, subject: 'lorum ipsum 2', is_helpful: 3, is_not_helpful: 4, product_id: 1, experience_id: 2, user_id: 2},
  {rating: 4, recommended: 1, subject: 'lorum ipsum 3', is_helpful: 0, is_not_helpful: 9, product_id: 1, experience_id: 3, user_id: 3},
  {rating: 1, recommended: null, subject: 'lorum ipsum 4', is_helpful: 5, is_not_helpful: 1, product_id: 1, experience_id: 4, user_id: 5},
  {rating: 2, recommended: null, subject: 'lorum ipsum 5', is_helpful: 2, is_not_helpful: 1, product_id: 1, experience_id: 4, user_id: 5},
];

var images = [
  {url: 'localhost', review_id: 1},
  {url: 'localhost', review_id: 1},
  {url: 'localhost', review_id: 1}
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
  users: users,
  images: images,
  products: products,
  reviews: reviews,
  experiences: experiences
};