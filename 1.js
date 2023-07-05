const temperatureC = parseFloat(prompt('Введите температуру в градусах Цельсия'));
const temperatureF = (9 / 5) * temperatureC +32;
alert(`Температура по Цельсию равна ${temperatureC}, температура по Фаренгейту равна ${temperatureF.toFixed(1)}`);