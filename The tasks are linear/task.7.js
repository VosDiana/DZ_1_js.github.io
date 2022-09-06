const seconds = parseInt(prompt("Введіть кількість секунд", "123456"));
const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
document.write(`До цього моменту пройшло ${hours} повних годин ${minutes} повних хвилин.`);