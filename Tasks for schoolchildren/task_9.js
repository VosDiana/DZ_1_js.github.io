const streetLength = parseFloat(prompt("Введіть довжину вулиці, км", "2.5"));
const lanternsВistance = parseFloat(prompt("Введіть відстань між ліхтарями, м", "15"));
const numberLamps = Math.ceil((streetLength * 1000) / lanternsВistance);
document.write(`Для освітлення вулиці довжиною ${streetLength} км ліхтарями,
розміщеними на відстані ${lanternsВistance} м,
потрібно ${numberLamps} лампочок.`);