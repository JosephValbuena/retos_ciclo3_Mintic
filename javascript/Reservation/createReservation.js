function openNReserva() {
    $("#formCrear").show();
    var datos = "";
    $.ajax({

        url: "http://129.151.118.226:8080/api/Costume/all",
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

        url: "http://129.151.118.226:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                datos += `
                <option value="${data[i].idClient}">${data[i].name}</option>
                `;
            }

            $("#client").html(datos);
            datos = "";
        }
    });
}

function createReservation() {

    datos = {
        startDate: fecha(),
        devolutionDate: $("#dateE").val(),
        client: {
            idClient: $("#client").val()
        },
        costume: {
            id: $("#costume").val()
        },
        status: "Created"
    }

    dataToSend = JSON.stringify(datos);
    console.log(datos);

    if (validar()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Reservation/save",
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
                },
                201: function() {
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