$(document).ready(function() {
    $(document).mousemove(function(event){
        $('#coord1').val(event.pageX);
        $('#coord2').val(event.pageY);
    })
    $('.attr_desc').hide();


    $('table tr').hover(function(){
        $(this).css('background-color', 'rgba(153,50,204,0.2)')
    }, function(){
        $(this).css('background-color', 'transparent')
    });

    $('.TogButton').click(function(){
        var visibility = $(this).next('.attr_desc');
        visibility.toggle();

        var visibility = visibility.css('display');
        if (visibility == 'none'){
            $(this).text('Show');
        } else {
            $(this).text('Hide');
        }
    });

    $('.TogButton').mouseover(function()  {
        $('.TogButton').css({"border-radius":"10px"});
    }) ;
    $('.TogButton').mouseout(function()  {
        $('.TogButton').css({"cursor":"pointer"});
    }) ;
});