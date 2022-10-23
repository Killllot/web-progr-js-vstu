$(function () {
    var bodyEl = $('body');
    bodyEl.css('background-color', 'lightblue');
    $ ('h2').css('text-decoration', 'underline');
    $('p').addClass('text');
    $('#tabHeader').removeAttr('align').css('font-weight','bold');
    $('tr:odd').css('background-color', 'violet');
    bodyEl.append('© Работа выполнена студентом бВМ-191 Филатовым К.Ю.');
});