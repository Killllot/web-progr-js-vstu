$(function () {
    function Train (num, p_naz, v_otpr) {
        this.num = num;
        this.p_naz = p_naz;
        this.v_otpr = v_otpr;
    }
    Train.prototype = {
        constructor : Train,
        PrintTrain: function() {
            var tr='<tr><td>'+this.num+'</td><td>'+this.p_naz+
                '</td><td>'+this.v_otpr+'</td></tr>';
            return tr;
        },
        PrintRec: function() {
            var tr = "<br>Номер поезда: "+this.num+"	Пункт назначения: "+this.p_naz+"	Время отправления :"+this.v_otpr;
            return tr;
        },
        Search: function (na) {
          if (na.num === this.num) {
              this.PrintTrain(na);
          }
        }
    };

    var t = new Train(80, '45.6', '100');
    var arrPr = [];
    arrPr.push(t);

    $('#input_train').hide();
    $('#delete_train').hide();
    $('#search_train').hide();
    $('#output_table').hide();

    $('#action').change(function()   {
        var obj = $(this).val();
        if (obj === 'input') {
            $('#output_table').hide();
            $('#input_train').show();
        }
        if (obj === 'blank') {
            $('#output_table').hide();
            $('#input_train').hide();
        }
        if (obj === 'output') {
            $('#output_table').show();
            $('#input_train').hide();


            let msHtml = "<table>";

            arrPr.forEach( (tr) => {
                msHtml += tr.PrintTrain(tr);
            })
            msHtml += "</table>"
            $('#output_table').html(msHtml);
        }
        if (obj === 'search') {
            $('#output_table').html("");
            $('#output_table').show();
            $('#input_train').hide();
            $('#search_train').show();
        }
        if (obj === 'delete') {
            $('#output_table').html("");
            $('#output_table').show();
            $('#delete_train').show();
            $('#input_train').hide();
        }
    });

    $("#b_add").click(function (e) {
        var fieldNum = $('#num input').val();
        var fieldAdr = $('#address input').val();
        var fieldTime = $('#time input').val();

        if(fieldNum ==="" || fieldAdr ==="" || fieldTime ==="") {
            console.log(fieldNum);
            console.log(fieldAdr);
            console.log(fieldTime);
            alert("Не все поля заполнены!");
            return false;
        }
        else {
            var t = new Train(fieldNum, fieldAdr, fieldTime)
            arrPr.push(t);
            alert("Добавлено: " + t);
            return false;
        }


    });

    $("#s_find").click(function (e) {
        var fieldNum = $('#sear input').val();
        console.log(fieldNum);
        if(fieldNum ==="") {
            console.log(fieldNum);
            alert("Не все поля заполнены!");
            return false;
        }
        else {
            let ps = arrPr.filter(el => el.num == fieldNum);

            let msHtml = "<table>";

            ps.forEach( (tr) => {
                msHtml += tr.PrintTrain(ps);
            })

            msHtml += "</table>"
            $('#output_table').html(msHtml);


            return false;
        }

    });

    $("#delete_train").click(function (e) {
        var fieldNum = $('#del input').val();
        console.log(fieldNum);
        if(fieldNum ==="") {
            console.log(fieldNum);
            alert("Не все поля заполнены!");
            return false;
        }
        else {
            let ps = arrPr.findIndex(el => el.num == fieldNum);
            arrPr.splice(ps,1)

            let msHtml = "<table>";

            arrPr.forEach( (tr) => {
                msHtml += tr.PrintTrain(tr);
            })

            msHtml += "</table>"
            $('#output_table').html(msHtml);


            return false;
        }

    });
});