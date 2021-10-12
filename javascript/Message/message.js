$(document).ready(function() {
    $("#formEdit").hide();
    $("#formNew").hide();
    getMessages();
});

function getMessages() {

    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        success: function(data) {
            sendListMesages(data);
        }
    });


}

function sendListMesages(data) {

    var datos = "";
    for (var i = 0; i < data.length; i++) {

        datos += `
        <tr>
            <td>${data[i].messagetext}</td>
            <td>
                <button onclick="editMessage(${data[i].id})" type="button" class="btn btn-dark">Editar</button>
                <button onclick="deleteMessage(${data[i].id})" type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`


    }

    $("#tbody").html(datos);
}