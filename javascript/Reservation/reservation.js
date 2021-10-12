$(document).ready(function() {
    $("#formCrear").hide();
    $("#formCalificar").hide();
    getReservation();
});

var reservation = [];
var cliente = [];
var calificacion = [];
var lista = "";

function getReservation() {
    lista = "";
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        success: function(datos) {
            reservation = datos;
            getCliente(reservation);
        }
    });
}

function getCliente(reservation) {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        success: function(datos) {
            cliente = datos;
            getCalificacion(reservation, cliente);
        }
    });
}

function getCalificacion(reservation, cliente) {
    $.ajax({
        url: "http://localhost:8080/api/Score/all",
        type: "GET",
        success: function(datos) {

            calificacion = datos;
            sirve = 0;

            for (var i = 0; i < reservation.length; i++) {

                for (var j = 0; j < cliente.length; j++) {

                    for (var k = 0; k < calificacion.length; k++) {
                        //console.log("idClienteReserva:" + reservation[i].id_client + " idCliente: " + cliente[j].id + " idReserva: " + reservation[i].id + " idReservaCali: " + calificacion[k].id_booking);
                        if (reservation[i].id_client == cliente[j].id && reservation[i].id == calificacion[k].id_booking) {
                            sirve = 1;
                            console.log("entre donde estrellas");
                            switch (calificacion[k].rate) {
                                case 1:
                                    lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><i class="fas fa-star"></i></td>
                                    </tr>
                                    `;
                                    break;
                                case 2:
                                    lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                                    </tr>
                                    `;
                                    break;
                                case 3:
                                    lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                                    </tr>
                                    `;
                                    break;
                                case 4:
                                    lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                                    </tr>
                                    `;
                                    break;
                                case 5:
                                    lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                                    </tr>
                                    `;
                                    break;
                            }

                            break;
                        }

                        if (reservation[i].id_client == cliente[j].id) {
                            if (k + 1 == calificacion.length) {
                                console.log("entre donde no estrellas");
                                lista += `
                                    <tr>
                                        <td>${reservation[i].id}</td>
                                        <td>${cliente[j].id}</td>
                                        <td>${cliente[j].name}</td>
                                        <td>${cliente[j].email}</td>
                                        <td>${reservation[i].start_date}</td>
                                        <td>${reservation[i].deliver_date}</td>
                                        <td><btn class="btn btn-dark" onclick="calificar(${reservation[i].id})">calificar</btn></td>
                                    </tr>
                                    `;
                            }

                        }
                        sirve = 0;
                    }
                }
            }

            $("#bodyList").html(lista);
        }
    });
}