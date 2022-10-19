function countC() {
    var element = document.getElementById('countryList').getElementsByTagName("li");;
    var count = element.length;
    document.write('Колличество стран:'+ count+"<br>");

    var banner = document.getElementById('population').getElementsByTagName("li");
    var summa=0;

    for(var i=0; i< banner.length; i++ )
    {
        summa =summa +parseFloat(banner[i].innerHTML);
    }
    document.write('Население:'+summa.toFixed(2) +"<br>");

    var massiv = new Array;
    var l=0;
    for ( var i=0; i<banner.length; i++)
    {
        l = parseFloat(banner[i].innerHTML);
        massiv[i]=l;
    }
    document.write('Сортировка:<br>');
    var massiv= [];
    for(var i=0;i< banner.length; i++)
    {
        massiv[i]={element : element[i].innerHTML, popul:parseFloat(banner[i].innerHTML)};
    }
    massiv.sort(function(a,b){return b.popul-a.popul});

    for(var i=0; i<massiv.length; i++)
    {
        document.write(massiv[i].element+ ' ' +massiv[i].popul+ "<br>");
    }
}
