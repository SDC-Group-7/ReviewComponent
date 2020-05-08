
const getReviews = async (productId) => {
  const apiUrl = `http://localhost:8080/api/products/${productId}/reviews`;
  const res = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    credentials: 'same-origin',
  });
  return res.json();
};

export default { getReviews };