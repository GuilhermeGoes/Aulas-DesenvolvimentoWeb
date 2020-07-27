$(function () {

    $('p').hide();
    $('#esconder1').hide();
    $('#esconder2').hide();
    $('#esconder3').hide();

    $('#button1').click(function () {
        $('#ovni').show();
        $('#button1').hide();
        $('#esconder1').show();
    });

    $('#button2').click(function () {
        $('#cherno').show();
        $('#button2').hide();
        $('#esconder2').show();
    });

    $('#button3').click(function () {
        $('#fimDoMundo').show();
        $('#button3').hide();
        $('#esconder3').show();
    });

    $('#esconder1').click(function () {
        $('#ovni').hide();
        $('#button1').show();
        $('#esconder1').hide();
    });

    $('#esconder2').click(function () {
        $('#cherno').hide();
        $('#button2').show();
        $('#esconder2').hide();
    });

    $('#esconder3').click(function () {
        $('#fimDoMundo').hide();
        $('#button3').show();
        $('#esconder3').hide();
    });

});