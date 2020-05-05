const getProductData = function (data) {
  const reviews = data.map(data=> {
    return {
      rating: data.rating,
      recommended: data.recommended,
      subject: data.subject,
      isHelpful: data.is_helpful,
      isNotHelpful: data.is_not_helpful,
      experience: {
        playExperience: data.play_experience,
        difficulty: data.difficulty,
        value: data.value,
        buildTime: data.build_time,
      },
      user: {
        name: data.name,
        age: data.age
      }
    };
  });

  const product = {
    name: data[0].product_name,
    reviews
  };

  return product;
};

module.exports = {
  getProductData,
}