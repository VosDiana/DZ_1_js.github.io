const num_1 = parseFloat (prompt ('Введіть першу сторону прямокутника, см', '0'))
const num_2 = parseFloat (prompt ('Введіть другу сторону прямокутника, см', '0'))
const rectangleArea = num_1 * num_2;
const rectanglePerimeter = (num_1 + num_2) * 2;
document.write(`Площа прямокутника = ${rectangleArea} см. <br/> Периметр прямокутника = ${rectanglePerimeter} см.`)