$(document).ready(function() {
    $("#formEdit").hide();
    $("#formNew").hide();
    getMessages();
});

function getMessages() {

    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        success: function(data) {
            sendListMesages(data.items);
        }
    });


}

function sendListMesages(data) {
    var datos = "";
    for (var i = 0; i < data.length; i++) {
        datos += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].messagetext}</td>
                    <td>
                        <button onclick="editMessage(${data[i].id})" type="button" class="btn btn-primary">Editar</button>
                        <button onclick="deleteMessage(${data[i].id})" type="button" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
            `;
    }
    $("#tbody").html(datos);
}