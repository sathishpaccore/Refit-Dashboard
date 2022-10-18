$('#overlayApp').hide();
$(document).ajaxStart(function () {
    // $('#overlayApp').show();
    $('#overlayApp').fadeIn();
}).ajaxStop(function () {
    // $('#overlayApp').hide();
    $('#overlayApp').delay(1000).fadeOut();
});