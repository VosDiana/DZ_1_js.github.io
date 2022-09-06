const screenWidth = parseInt(prompt("Введіть ширину екрану", "350px"));
const numberElements = parseInt(prompt("Введіть кількість елементів", "5"));
const widthElements = Math.floor(screenWidth / numberElements);
document.write(`Ширина елементів, які повинні бути відображені у рядку, становить ${widthElements} px`);