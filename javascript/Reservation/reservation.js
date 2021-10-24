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
        url: "http://129.151.118.226:8080/api/Reservation/all",
        type: "GET",
        success: function(datos) {
            console.log(datos);
            var lista = "";
            for (var i = 0; i < datos.length; i++) {
                if (datos[i].score) {
                    switch (datos[i].score.stars) {
                        case 1:

                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.idClient}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${datos[i].startDate}</td>
                                <td>${datos[i].devolutionDate}</td>
                                <td><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 2:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.idClient}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${datos[i].startDate}</td>
                                <td>${datos[i].devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 3:
                            lista += `
                            <tr>
                            <td>${datos[i].idReservation}</td>
                            <td>${datos[i].client.idClient}</td>
                            <td>${datos[i].client.name}</td>
                            <td>${datos[i].client.email}</td>
                            <td>${datos[i].startDate}</td>
                            <td>${datos[i].devolutionDate}</td>  
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 4:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.idClient}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${datos[i].startDate}</td>
                                <td>${datos[i].devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                        case 5:
                            lista += `
                            <tr>
                                <td>${datos[i].idReservation}</td>
                                <td>${datos[i].client.idClient}</td>
                                <td>${datos[i].client.name}</td>
                                <td>${datos[i].client.email}</td>
                                <td>${datos[i].startDate}</td>
                                <td>${datos[i].devolutionDate}</td>
                                <td><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></td>
                            </tr>
                            `;
                            break;
                    }
                } else {
                    lista += `
                    <tr>
                    <td>${datos[i].idReservation}</td>
                    <td>${datos[i].client.idClient}</td>
                    <td>${datos[i].client.name}</td>
                    <td>${datos[i].client.email}</td>
                    <td>${datos[i].startDate}</td>
                    <td>${datos[i].devolutionDate}</td>
                        <td><btn class="btn btn-dark" onclick="calificar(${datos[i].idReservation})">calificar</btn></td>
                    </tr>
                    `;
                }
            }
            $("#bodyList").html(lista);
        }
    });
}