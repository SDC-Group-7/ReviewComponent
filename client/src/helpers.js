const getSumExperience = (data) => {
  return data.reduce((result, review) => {
    let experience = review.experience;
    result.playExperience += experience.playExperience;
    result.difficulty += experience.difficulty;
    result.value += experience.value;
    return result;
  }, {playExperience: 0, difficulty: 0, value: 0});
};

const aggregateExperiences = (sums, length) => {
  Object.keys(sums).forEach((key) => {
    sums[key] = (Math.round((sums[key] / length) * 10) / 10).toFixed(1);
  });
  return sums;
};

const aggregateData = function (data) {
  const aggregatedReviewsCount = data.reduce((result, review) => {
    result[review.rating] += 1;
    return result;
  }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});

  // Get aggregated review experiences -> 5.0
  const sumExperiences = getSumExperience(data);
  const aggregatedExperiences = aggregateExperiences(sumExperiences, data.length);

  // Get overall rating -> 4.3
  const totalRatings = data.reduce((total, review) => {
    return total + review.rating;
  }, 0);
  const overallRating = (Math.round((totalRatings / data.length) * 10) / 10);

  // Get recommendation percentage of a review -> 91.5
  const recommendationResult = data.reduce((total, review) => {
    return review.recommended ? total + 1 : total;
  }, 0) / data.length * 100;
  const overallRecommendation = Math.round(recommendationResult * 10) / 10;

  return {
    overallRating: overallRating || 1,
    overallReviewCount: data.length,
    overallRecommendation,
    aggregatedReviewsCount,
    aggregatedExperiences
  };
};
export default {aggregateData};