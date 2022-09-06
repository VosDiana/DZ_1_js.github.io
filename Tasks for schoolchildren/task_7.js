const onePageTime = parseFloat(prompt("Введіть кількість хвилин, за яку прочитаєте одну сторінку", "5"));
const pagesNum = parseInt(prompt("Введіть кількість сторінок в книжці", "650"));
const hoursReading = Math.floor((pagesNum * onePageTime) / 60);
const minutesReading = (pagesNum * onePageTime) % 60;
document.write(`Книжка буде прочитана за ${hoursReading} год. ${minutesReading} хв.`);
  