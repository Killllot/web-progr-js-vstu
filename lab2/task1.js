document.write('<h2>Лабораторная работа № 2 Задание 1</h2>');
let x=Number(prompt("Введите желаемое количество элементов", "1"));

let array = [];
while (x>0) {
    array.push(Math.floor(Math.random()*16));
    x--;
}

print(array);

ifEven(array)

function print(array) {
    for(let i=0; i < array.length ;i++) {
        document.write(array[i] + '');
        document.write('<br>');
    }

}

function ifEven (array) {
    let counter = '0';
    let evenArray = [];
    for(let i=0; i < array.length ;i++) {
        if(array[i]%2===0) {
            evenArray.push(array[i]);
            counter++;
        }
    }
    document.write('<br>');
    document.write('Количество четных элементов:  ' + counter);

    document.write('<br>');
    document.write('Четный массив:');
    document.write('<br>');
    print(evenArray);
}

