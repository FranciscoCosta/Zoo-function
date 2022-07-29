const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const funcionario = data.employees.filter((manager) =>
      manager.managers.includes(managerId));
    const nomes = funcionario.map((element) => `${element.firstName} ${element.lastName}`);
    return nomes;
  }
}
getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = { isManager, getRelatedEmployees };
