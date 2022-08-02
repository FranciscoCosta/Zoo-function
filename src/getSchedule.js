const { species, hours } = require('../data/zoo_data');

const dia = Object.keys(hours);

function getSchedule(scheduleTarget) {
//   const animal = species.find((nome) => nome.name === scheduleTarget);
//   const dias = dia.find((diaN) => diaN === scheduleTarget);
//   if (animal) {
//     return animal.availability;
//   } else if (dias) {
//     return pegaDias(dias);
//   } else if (!dias && !animal) {
//     return todosDias();
//   }
// }

  // function diaDaSemana(dias) {
  //   animaisDisp = [];
  //   species.forEach((animal) => {
  //     if (animal.availability.includes(dias)) {
  //       animaisDisp.push(animal.name);
  //     }
  //   });
  //   return animaisDisp;
  // }

// function pegaDias(dias) {
//   if (dias === "Monday") {
//     return {
//       officeHour: "CLOSED",
//       exhibition: "The zoo will be closed!",
//     };
//   } else {
//     return {
//       officeHour: `Open from ${hours[dias].open}am until ${hours[dias].close}pm`,
//       exhibition: diaDaSemana(dias),
//     };
//   }
}

module.exports = getSchedule;
