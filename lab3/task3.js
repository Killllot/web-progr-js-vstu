document.write('<h2>Лабораторная работа № 2 Задание 3</h2>');

array = ['192.123.2.0','ф663фр','http://www.test.ru!','к999кк','ш096щ','test1','л777лл','This is a text',];

print(array);
search(array);

function search(array) {
    let reg = /\D\d\d\d\D\D/;
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
