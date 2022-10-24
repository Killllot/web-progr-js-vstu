$(function () {
    $('#start_data').hide();
    $('#count_button').hide();
    $('#results').hide();
    $('#reset').hide();

    $('#sel_val').change(function()   {
        var obj = $(this).val();
        if (obj === 'time') {
            $('#start_data').show();
            $('#speed').show();
            $('#distance').show();
            $('#time').hide();
            $('#count_button').show();
        }
        if (obj === 'distance') {
            $('#start_data').show();
            $('#speed').show();
            $('#distance').hide();
            $('#time').show();
            $('#count_button').show();
        }
        if (obj === 'speed') {
            $('#start_data').show();
            $('#speed').hide();
            $('#distance').show();
            $('#time').show();
            $('#count_button').show();
        }
    });

    $('#count_button').click(function () {
        $('#results').show();
        $('#reset').show();
        let speed = document.getElementById('val_speed').value;
        let dist = document.getElementById('val_distance').value;
        let time = document.getElementById('val_time').value;
        if($('#sel_val').val() === 'time') {
            document.getElementById('result').value = dist/speed;
        }
        if($('#sel_val').val() === 'speed') {
            document.getElementById('result').value = dist/time;
        }
        if($('#sel_val').val() === 'distance') {
            document.getElementById('result').value = speed*time;
        }
        return false;
    });
});