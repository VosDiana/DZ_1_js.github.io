const length = parseFloat(prompt("Введіть довжину стіни, м", "5.1"));
const height = parseFloat(prompt("Введіть висоту стіни, м", "3.2"));
const windowLength = parseFloat(prompt("Введіть довжину вікна, м", "2.1"));
const windowHeight = parseFloat(prompt("Введіть висоту вікна, м", "1.7"));
const room = Math.ceil(length * height - 2 * windowLength * windowHeight);
document.write(`Для поклейки стіни з заданими розмірами користувачу потрібно купити ${room} м<sup>2</sup> шпалер.`)