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
            console.log(datos);
            var lista = "";
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].score) {
                    var startDate = new Date(datos[i].startDate);
                    var devolutionDate = new Date(datos[i].devolutionDate);
                    switch (datos[i].score.stars) {
                        case 1:

                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.id}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${startDate}</td>
                                <td>${devolutionDate}</td>
                                <td><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 2:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.id}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${startDate}</td>
                                <td>${devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 3:
                            lista += `
                            <tr>
                            <td>${datos[i].idReservation}</td>
                            <td>${datos[i].client.id}</td>
                            <td>${datos[i].client.name}</td>
                            <td>${datos[i].client.email}</td>
                            <td>${startDate}</td>
                            <td>${devolutionDate}</td>  
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 4:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.id}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${startDate}</td>
                                <td>${devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 5:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.id}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${startDate}</td>
                                <td>${devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                    }
                } else {
                    var startDate = new Date(datos[i].startDate);
                    var devolutionDate = new Date(datos[i].devolutionDate);
                    lista += `
                    <tr>
                    <td>${datos[i].idReservation}</td>
                    <td>${datos[i].client.id}</td>
                    <td>${datos[i].client.name}</td>
                    <td>${datos[i].client.email}</td>
                    <td>${startDate}</td>
                    <td>${devolutionDate}</td>
                        <td><btn class="btn btn-dark" onclick="calificar(${datos[i].idReservation})">calificar</btn></td>
                    </tr>
                    `;
                }
            }
            $("#bodyList").html(lista);
        }
    });
}