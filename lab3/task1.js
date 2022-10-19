document.write('<h2>Лабораторная работа № 2 Задание 1</h2>');

let array = ['Text','TEXT','TEST!','test','qwerty','test1','rfvbgt','hqdqw89898iwud','This is a text',];
document.write('<br>');
print(array);
document.write('<br>');
search(array);
function search(array) {
    let counterSize = 0;
    let counter = 0;
    let pr;
    for(let i=0; i < array.length;i++) {
        if((array[i].toLowerCase()).indexOf('text')!==-1) {
            counter++;
        }
        if(array[i].length>10) {
            counterSize++;
            document.write('str = ' + i);
            document.write('<br>')
        }
        if(i===3) {
            pr = array[i].slice(-3);
        }
    }
    document.write('<br>')
    document.write(counter);
    document.write('<br>')
    document.write(pr);
}

function print(array) {
    for(let i=0; i < array.length ;i++) {
        document.write(array[i] + '');
        document.write('<br>');
    }

}

