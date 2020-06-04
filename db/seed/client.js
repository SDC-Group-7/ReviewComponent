const readline = require('readline');

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const review = () => new Promise(resolve => io.question('\n', resolve));

const nReviews = n => {
  return async callback => {
    console.error(new Date());
    for (let i = 0; i < n; i++) {
      await review().then(callback);
    }
    console.error('closing connection after ', n);
    console.error(new Date());
    io.close();
    process.exit();
  }
}

const n = +process.argv[process.argv.length - 1] || 1;

module.exports = nReviews(n);
