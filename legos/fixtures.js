const fixture = {
  product: { id: 1, name: 'batman' },
  reviews: [{
    id: 1, rating: 5, recommended: 1, subject: 'lorum ipsum 1', isHelpful: 5, isNotHelpful: 1, productId: 1, experienceId: 1, userId: 1,
  },
  {
    id: 2,
    rating: 4,
    recommended: { type: 'Buffer', data: [ 1 ] },
    subject: 'lorum ipsum 3',
    isHelpful: 0,
    isNotHelpful: 9,
    experience:
     { playExperience: 4, difficulty: 2, value: 4, buildTime: 18 },
    user: { name: 'Lonna', age: 104 }
  }],
  experience: {
    id: 1, playExperience: 4, difficulty: 4, value: 5, buildTime: 5,
  },
  user: {
    id: 1, name: 'Adolph', age: 97
  },
  images: [
    {id: 1, url: 'localhost', reviewId: 1 },
    {id: 2, url: 'localhost', reviewId: 1 },
    {id: 3, url: 'localhost', reviewId: 1 },
  ]
};

module.exports = fixture;