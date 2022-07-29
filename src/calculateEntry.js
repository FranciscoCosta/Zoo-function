const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const pessoas = { child: 0, adult: 0, senior: 0 };
  entrants.filter((element) => {
    if (element.age < 18) {
      pessoas.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      pessoas.adult += 1;
    } else {
      pessoas.senior += 1;
    }
    return pessoas;
  });
  return pessoas;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  let total = 0;
  const valores = Object.values(data.prices);

  total = (adult * valores[0]) + (senior * valores[1]) + (child * valores[2]);
  return total;
}
module.exports = { calculateEntry, countEntrants };
