const { employees, species } = require('../data/zoo_data');

function pegavalores(nome) {
  const animais = nome.map((element) => species.find((animal) => element === animal.id));
  const nomesAnimais = animais.map((nomes) => nomes.name);
  const local = animais.map((nome3) => nome3.location);
  return [nomesAnimais, local];
}

function final(valor) {
  const array = pegavalores(valor.responsibleFor);
  let resultado = {};
  resultado = {
    id: valor.id,
    fullName: `${valor.firstName} ${valor.lastName}`,
    species: array[0],
    locations: array[1],
  };
  return resultado;
}

function getEmployeesCoverage(valor) {
  if (!valor) {
    const arrayTotal = [];
    employees.forEach((empregado) => {
      const finalizado = final(empregado);
      arrayTotal.push(finalizado);
    });
    return arrayTotal;
  }
  const entrie = Object.values(valor);
  const entrada = entrie.toString();
  const nome = employees.find((nome4) => nome4.firstName === entrada);
  const sobreNome = employees.find((nome1) => nome1.lastName === entrada);
  const id = employees.find((nome2) => nome2.id === entrada);
  if (nome) { return final(nome); }
  if (sobreNome) { return final(sobreNome); }
  if (id) { return final(id); }

  throw new Error('Informações inválidas');
}
console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
