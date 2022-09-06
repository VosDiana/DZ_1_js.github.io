const month = parseInt(prompt("Введіть арендну плату за квартиру за місяць, грн", "5000"));
const year = month * 12;
const twoYears = year * 2;
const tenYears = year * 10;
document.write(`Якщо арендна плата за квартиру за місяць становить ${month} грн., то:
  <ul>
    <li>вартість арендної плати за рік становить ${year} грн,</li>
    <li>вартість арендної плати за 2 роки становить ${twoYears} грн,</li>
    <li>вартість арендної плати за 10 років становить ${tenYears} грн.</li>
  </ul>`);