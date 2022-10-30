$(function () {

    $('#partner_data').hide();
    $('#warning').hide();

    $('#fio').focus();
    $("#married").prop('checked', false);
    $("#single").prop('checked', false);


    $("#radiob :radio").on("click", function (e) {
        console.clear();
        console.log(this.checked);
        e.preventDefault();
        var btn = $(this).val();
        if(btn === 'yes') {
            $("#partner_data").show();
        }
        else {
            $("#partner_data").hide();
        }
        setTimeout(
            () => $(this).prop("checked", !this.checked).trigger("change")
        );
    });

    $("#send_data").click(function (e) {
        var fieldFIO = $('#fio').val();
        var fieldPhone = $('#tel input').val();
        var fieldEmail = $('#email input').val();
        var fieldPost = $('#post input').val();
        var fieldMarr = $('#partner_data input').val();



        if ($('#married').attr('checked')) {
            if(fieldFIO ==="" || fieldPhone ==="" || fieldEmail ==="" || fieldPost ==="" || fieldMarr ==="") {
                console.log(fieldFIO);
                console.log(fieldPhone);
                console.log(fieldEmail);
                console.log(fieldPost);
                console.log(fieldMarr);
                alert("Не все поля заполнены!");
                return false;
            }
        }
        else
            if(fieldFIO ==="" || fieldPhone ==="" || fieldEmail ==="" || fieldPost ==="") {
                alert("Не все поля заполнены!");
                return false;
            }


    })
});