
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

const sendUpvote = async(reviewId, productId, data) => {
  const apiUrl = `http://localhost:8080/api/products/${productId}/reviews/${reviewId}`;

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  return res.json();
};


export default { getReviews, sendUpvote };