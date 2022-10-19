document.write('<h2>Лабораторная работа № 3</h2>')
document.write('Исходные данные<br>');
document.write('a = '+a+'<br>');
document.write('x = ' + x + '<br>' );

let array = [1,2,3,22,5,6,7,8];

function print(array) {
    for(let i=0; i < array.length ;i++) {
        document.write(array[i] + '');
    }
    document.write('<br>');
}
let sumArray;
let compArray;
function sumAndComp(array) {
    for(let i=0; i < array.length ;i++) {
        sumArray+=array[i];
        compArray*=array[i];
    }
}

let sortArray = array.sort(function(a,b){return a-b});

function addInArray(array) {
    array.splice(array.length,0,9);
    document.write('Добавили в массив');
    document.write('<br>');
    print(array);

    array.unshift(10);
    document.write('Добавили в массив');
    document.write('<br>');
    print(array);

    array.push(11);
    document.write('Добавили в массив');
    document.write('<br>');
    print(array);
}

function removeAnArray(array) {
    array.splice(array.length,1);
    document.write('Удалили');
    document.write('<br>');
    print(array);

    array.shift();
    document.write('Удалили начальный');
    document.write('<br>');
    print(array);

    array.pos();
    document.write('Удалили конечный');
    document.write('<br>');
    print(array);
}

document.write('Результат: ');

document.write(' sum and composition array ');
document.write('<br>');
sumAndComp(array);
print(sumArray);
print(compArray);

document.write('<br>');
document.write('sorting array');
print(sortArray);

document.write('<br>');
document.write('adding to array');
document.write('<br>');
addInArray(array);

document.write('<br>');
document.write('remove to array')
document.write('<br>');
removeAnArray(array);

