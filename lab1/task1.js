document.write('<h2>Лабораторная работа № 1</h2>')
document.write('Исходные данные<br>');
document.write('x = '+x+'<br>');
document.write('a = '+a+'<br>');
document.write('b = '+b+'<br>');
if (x<4.3)
{

    y=(x*a)/b;
    document.write('Выбрана ветвь вычисления 1<br>');
}
else
{
    y=x/(a*b);
    document.write('Выбрана ветвь вычисления 2<br>');
}
document.write('Результат: ');
document.write('y = '+y.toFixed(3));
