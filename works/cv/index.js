$(document).ready(function() {

    /*    if ($('#cv1').css('display', 'block')) {
        $('#main>button').click(function() {
            $('#cv3').hide();
            $('#cv1').hide('260');
            $('#cv2').show('400');
        });
    };
    if ($('#cv2').css('display', 'block')) {
        $('#main>button').click(function() {
            $('#cv1').hide();
            $('#cv2').hide('260');
            $('#cv3').show('400');
        });
    };
    if ($('#cv3').css('display', 'block')) {
        $('#main>button').click(function() {
            $('#cv2').hide();
            $('#cv3').hide('260');
            $('#cv1').show('400');
        });
    };*/

    $('#cv1').click(function() {
        $('#cv3').hide('260');
        $('#cv1').hide('260');
        $('#cv2').show('400');
    });
    $('#cv2').click(function() {
        $('#cv1').hide('260');
        $('#cv2').hide('260');
        $('#cv3').show('400');
    });
    $('#cv3').click(function() {
        $('#cv2').hide('260');
        $('#cv3').hide('260');
        $('#cv1').show('400');
    });
});