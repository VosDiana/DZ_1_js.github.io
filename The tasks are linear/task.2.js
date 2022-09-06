const salary = parseFloat(prompt("Введіть вашу заробітну плату, грн.", "4500"));
const costOfLiving = parseFloat( prompt("Введіть розмір прожиткового мінімуму, грн.", "6500"));
const social = costOfLiving - salary;
document.write(`Розмір соціальної допомоги становить ${social} грн.`);