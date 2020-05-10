const getSumExperience = (data) => {
  return data.reduce((result, review) => {
    let experience = review.experience;
    result.playExperience += experience.playExperience;
    result.difficulty += experience.difficulty;
    result.value += experience.value;
    return result;
  }, {playExperience: 0, difficulty: 0, value: 0});
};

const aggregateExperiences = (data) => {
  const sums = getSumExperience(data);

  Object.keys(sums).forEach((key) => {
    sums[key] = (Math.round((sums[key] / data.length) * 10) / 10).toFixed(1);
  });
  return sums;
};

const getOverallRating = (data) => {
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);
  return (Math.round((totalRatings / data.length) * 10) / 10);
};

const getOverallRecommendation = (data) => {

};

const aggregateData = function (data) {
  const aggregatedReviewsCount = data.reduce((result, review) => {
    result[review.rating] += 1;
    return result;
  }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  const aggregatedExperiences = aggregateExperiences(data);

  const overallRating = getOverallRating(data);

  const recommendationResult = data.reduce((total, review) => {
    return review.recommended ? total + 1 : total;
  }, 0) / data.length * 100;
  const overallRecommendation = Math.round(recommendationResult * 10) / 10;

  return {
    'data': {
      overallRating: overallRating || 1,
      overallReviewCount: data.length,
      overallRecommendation,
      aggregatedReviewsCount,
      aggregatedExperiences
    }
  };
};
export default {aggregateData};