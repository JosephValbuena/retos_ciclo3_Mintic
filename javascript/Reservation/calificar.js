var idReservation = "";

function calificar(id) {
    $("#formCalificar").show();
    idReservation = id;
};

function calificarReservacion() {
    datos = {
        stars: $("#rate").val(),
        messageText: $("#message").val(),
        reservation: {
            idReservation: idReservation
        }
    };

    dataToSend = JSON.stringify(datos);

    console.log(datos);

    if (validarC()) {
        $.ajax({
            url: "http://localhost:8080/api/Score/save",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha calificado la reserva',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getReservation();
                    cancelarReservacion();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha calificado la reserva',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getReservation();
                    cancelarReservacion();
                }
            }
        });

    }
}

function cancelarReservacion() {
    $("#formCalificar").hide();
}

$(".cerrarc").click(function() {
    $("#formCalificar").hide();
});