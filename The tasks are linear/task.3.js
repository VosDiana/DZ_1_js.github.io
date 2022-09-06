const tomatoes = parseFloat(prompt("Введіть вагу помідорів", "3,4"));
const tomatoesPrice = parseFloat(prompt("Введіть ціну помідорів", "56.99"));
const pepper = parseInt(prompt("Введіть вагу перцю", "2.5"));
const pepperPrice = parseFloat(prompt("Введіть ціну перцю", "61.99"));
const tomatoTotalPrice = tomatoes *  tomatoesPrice;
const pepperTotalPrice = pepper * pepperPrice;
document.write(`<table border = "2px">
    <tr>
        <th>Назва</th>
        <th>К-ть/вага</th>
        <th>Ціна</th>
        <th>Вартість</th>
    </tr>
    <tr>
        <td>Помідори</td>
        <td>${tomatoes}</td>
        <td>${tomatoesPrice}</td>
        <td>${tomatoTotalPrice.toFixed(2)}</td>
    </tr>
    <tr>
        <td>Перець</td>
        <td>${pepper}</td>
        <td>${pepperPrice}</td>
        <td>${pepperTotalPrice.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="3">Разом:</td>
        <td>${(tomatoTotalPrice+ pepperTotalPrice).toFixed(2)}</td>
    </tr>`);
