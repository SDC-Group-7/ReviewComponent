const readline = require('readline');

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getReview = () => new Promise(resolve => io.question('\n', resolve));

const getReviews = async (n = 1) => {
  while (n-- > 0) {
    await getReview().then(console.error);
  }
  io.close();
  process.exit();
};

const n = +process.argv[process.argv.length - 1] || 1;
getReviews(n);
