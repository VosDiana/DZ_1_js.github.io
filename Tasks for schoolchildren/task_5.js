const month = parseInt(prompt("Введіть арендну плату за квартиру за місяць, грн", "5000"));
const money = parseInt(prompt("Введіть загальну суму грошей, грн", "100000"));
const countFullMonth = Math.floor(money / month);
const countFullYears = Math.floor(countFullMonth / 12);
document.write(`Якщо арендна плата за квартиру за місяць становить ${month} грн.,
  а загальна сума грошей складає ${money} грн, 
  то цих грошей вистачить на оплату ${countFullMonth} повних місяців
  або ${countFullYears} повних років оренди.`);  