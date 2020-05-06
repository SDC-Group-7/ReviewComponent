const getReviews = async (productId) => {
  const url = `/api/products/${productId}/reviews`;
  const res = await fetch(url, {
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