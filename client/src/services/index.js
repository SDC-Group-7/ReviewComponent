const getProduct = async (productId) => {
  const url = `/api/products/${productId}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify
  });
  return res.json();
};

module.exports = { getProduct };