const fixture = {
  product: { id: 1, name: 'batman' },
  review: {
    id: 1, rating: 5, recommended: 1, subject: 'lorum ipsum 1', isHelpful: 5, isNotHelpful: 1, productId: 1, experienceId: 1, userId: 1,
  },
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