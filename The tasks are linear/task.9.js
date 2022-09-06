const coins = parseInt(prompt("Введіть номінал монет (2коп, 5коп, 25коп, 50 коп)", "15"));
const coins2 = parseInt(prompt("Введіть кількість монет вказаного номіналу", "42"));
const sum = coins * coins2;
const hryvnias = Math.floor(sum / 100);
const pennies = sum % 100;
document.write(`${coins2} монет номіналом ${coins} коп це: ${hryvnias} грн. ${pennies} коп.`);  