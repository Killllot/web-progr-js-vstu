$(function () {
    
    $('#b1').click(function()  {
        $('body').addClass('text1');
        $('body').removeClass('text2');
        $('body').removeClass('text3');
    });
    $('#b2').click(function()  {
        $('body').addClass('text2');
        $('body').removeClass('text1');
        $('body').removeClass('text3');
    });
    $('#b3').click(function()  {
        $('body').addClass('text3');
        $('body').removeClass('text1');
        $('body').removeClass('text2');
    });
    $('#b4').click(function()  {
        $('body').removeClass('text1');
        $('body').removeClass('text2');
        $('body').removeClass('text3');
    });

    $('#backcolor').change(function()   {
        var color = $(this).val();
        $('body').css('background-color', color);
    });
    $('#list_1').mouseover(function()  {
        $('#list_1').css('text-decoration','underline');
    }) ;
    $('#list_1').mouseout(function()  {
        $('#list_1').css('text-decoration','none');
    }) ;
    $('#list_2').mouseover(function()  {
        $('#list_2').css('font-style','italic');

    });
    $('#list_2').mouseout(function()  {
        $('#list_2').css('font-style','normal');
    });
    $('#Roll').hover(function()  {
            $('#Roll').attr('src','Pics/pic2.jpg' );
        } ,
        function()  {
            $('#Roll').attr('src','Pics/pic1.jpg' );
        });
});