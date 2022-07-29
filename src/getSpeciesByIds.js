const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((especies) => ids.find((id) => id === especies.id));
}

module.exports = getSpeciesByIds;
