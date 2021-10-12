var idReservation = "";

function calificar(id) {
    $("#formCalificar").show();
    idReservation = id;
};

function calificarReservacion() {
    datos = {
        id_booking: idReservation,
        rate: $("#rate").val(),
        message: $("#message").val()
    };

    dataToSend = JSON.stringify(datos);

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
                        title: 'Se ha creado el nuevo mensaje',
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