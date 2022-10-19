document.write('<h2>Лабораторная работа № 2 Задание 2</h2>');

let now = new Date();

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

let year = now.getFullYear()
let month = months[now.getMonth()];
let day = days[now.getDay()];
let str = `${year}.${month}.${day},${days[now.getDay()]},${now.getHours()+'hr'} ${now.getMinutes()+'min'} ${now.getSeconds()+'sec'}`;
document.write(str);
