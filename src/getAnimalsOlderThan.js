const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((element) => element.name === animal);
  const idademinima = animais.residents.every((residente) => residente.age >= age);
  return idademinima;
}

console.log(getAnimalsOlderThan('lions', 6));
module.exports = getAnimalsOlderThan;
