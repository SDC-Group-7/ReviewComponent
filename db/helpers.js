// randomize all user age
const randomAge = function (data) {
  data.forEach((person) => {
    var age = Math.floor(Math.random() * 100) + 5;
    person.age = age;
  });
};

module.exports = {
  randomAge
}