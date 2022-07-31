const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionarios = data.employees.find((funcionario) => funcionario.id === id);
  const especieID = funcionarios.responsibleFor[0];
  const especie = data.species.find((specie) => specie.id === especieID);
  const velho = especie.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) return curr;
    return acc;
  });
  return [velho.name, velho.sex, velho.age];
}

module.exports = getOldestFromFirstSpecies;
