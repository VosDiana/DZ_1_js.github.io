const nail = parseFloat(prompt("Введіть довжину цвяха (L), см", "10"));
const nail2 = parseFloat(prompt("Введіть заглиблення цвяху за один удар (K), мм", "20"));
const strokesNumber = Math.ceil((nail * 10) / nail2);
document.write(`Цвях повністю заб'ють в дошку за ${strokesNumber} ударів.`);