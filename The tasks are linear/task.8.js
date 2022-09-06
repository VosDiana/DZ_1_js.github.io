const coins = parseInt(prompt("Введіть кількість монет номіналом 1 коп", "1586"));
  const hryvnias = Math.floor(coins / 100);
  const pennies = coins % 100;
  document.write(`${coins} монет номіналом 1 коп це: ${hryvnias} грн. ${pennies} коп.`);
  