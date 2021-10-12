function openNReserva() {
    $("#formCrear").show();
    var datos = "";
    $.ajax({

        url: "http://localhost:8080/api/Costume/all",
        type: "GET",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                datos += `
                <option value="${data[i].id}">${data[i].name}</option>
                `;
            }

            $("#costume").html(datos);
            datos = "";
        }
    });

    $.ajax({

        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                datos += `
                <option value="${data[i].id}">${data[i].name}</option>
                `;
            }

            $("#client").html(datos);
            datos = "";
        }
    });
}

function createReservation() {

    datos = {
        id_costume: $("#costume").val(),
        id_client: $("#client").val(),
        start_date: fecha(),
        deliver_date: $("#dateE").val(),
        status: "Creado"
    }

    dataToSend = JSON.stringify(datos);

    if (validar()) {
        $.ajax({
            url: "http://localhost:8080/api/Reservation/save",
            type: "POST",
            dataType: "json",
            data: dataToSend,
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado la nueva reserva',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getReservation();
                    cancelReservation();
                }
            }
        });


    }



}

$("#close-popup").click(function() {
    $("#formCrear").hide();
});

function cancelReservation() {
    $("#formCrear").hide();
}

function fecha() {
    const hoy = new Date();
    var fecha = "";
    var anio = hoy.getFullYear();
    var mes = hoy.getMonth() + 1;
    var dia = hoy.getDate();

    return fecha = anio + "-" + mes + "-" + dia;

}