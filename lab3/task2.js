document.write('<h2>Лабораторная работа № 2 Задание 2</h2>');

let arrayUrl = ['www.mysite.com','TEXT','http://www.test.ru!','http://www.test3.ru','http://www.test.test.test.ru','test1','rfvbgt','This is a text',];

print(arrayUrl);
search(arrayUrl);

function search(array) {
    let reg = /((\bhttps?:\/\/)|(\bwww\.))\S*/g;
    for(let i=0; i < array.length;i++) {
        if(array[i].match(reg)) {
            document.write('<br>');
            document.write(array[i]);
        }
    }
}
function print(array) {
    for(let i=0; i < array.length ;i++) {
        document.write(array[i] + '');
        document.write('<br>');
    }

}
