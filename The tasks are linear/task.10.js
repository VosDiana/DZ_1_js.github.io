const days = parseInt(prompt("Введіть кількість днів", "23"));
const weeks = Math.floor(days / 7);
document.write(`У ${days} днях ${weeks} повних тижнів`);