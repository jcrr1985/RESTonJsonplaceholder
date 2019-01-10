$("#modal").iziModal({
    radius: 3,
    zindex: 999,
    width: "fit-content"
});

$("#modal2").iziModal({
    radius: 3,
    zindex: 999,
    width: "fit-content"
});

$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal').iziModal('open');
})

$(document).on('click', '.trigger2', function (event) {
    event.preventDefault();
    // $('#modal').iziModal('setZindex', 99999);
    // $('#modal').iziModal('open', { zindex: 99999 });
    $('#modal2').iziModal('open');
})