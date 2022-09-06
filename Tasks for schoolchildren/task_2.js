const num_1 = parseFloat (prompt ('Введіть вагу помідорів, кг', '0'))
const num_2 = parseFloat (prompt ('Введіть вартість 1 кг помідорів, грн', '0'))
const symma = num_2 * num_1;
document.write(`<table border = "2px">
    <tr>
        <th>НАЗВА</th>
        <th>Вага</th>
        <th>Ціна/кг</th>
        <th>Сума</th>
    </tr>
    <tr>
        <td>Помідори</td>
        <td>${num_1}</td>
        <td>${num_2}</td>
        <td>${num_2 * num_1}</td>
    </tr>`)