const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((elment) =>
    [elment.firstName, elment.lastName].includes(employeeName));
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
