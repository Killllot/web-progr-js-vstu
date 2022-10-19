document.write('<h2>Лабораторная работа № 2</h2>')
document.write('Исходные данные<br>');
document.write('a = '+a+'<br>');
document.write('x = ' + x + '<br>' );
switch (a) {
    case 1:
        y=x*x*x;
        document.write('выбрана ветвь 1');
        break;
    case 2:
        y=Math.pow(x,-2);
        document.write('выбрана ветвь 2');
        break;
    case 3:
        y=Math.sin(x);
        document.write('выбрана ветвь 3');
        break;
    default:
        document.write('введено некорректное число');
}
document.write('Результат: ');
document.write('y = '+y.toFixed(3));
