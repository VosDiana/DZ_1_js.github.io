const startWeight = parseFloat(prompt("Введіть початкову вагу порося, кг", "10"));
const weightDay = parseFloat(prompt("Введіть вагу,яку набирає порося за день, г", "500"));
const totalWeight = parseInt(prompt("Введіть кінцеву вагу порося, кг", "150"));
const numberDays = Math.ceil(((totalWeight - startWeight) * 1000) / weightDay);
document.write( `Порося виросте до ваги ${totalWeight} кг за ${numberDays} днів.`);
  