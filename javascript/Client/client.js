$(document).ready(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
    getClients();
});

function getClients() {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        success: function(data) {
            clientLists(data.items);
        }
    });
}

function clientLists(clients) {
    var client = "";
    for (var i = 0; i < clients.length; i++) {
        client += `
            <tr>
                <td>${clients[i].id}</td>
                <td>${clients[i].name}</td>
                <td>${clients[i].email}</td>
                <td>${clients[i].age}</td>
                <td>
                    <button onclick="editClient(${clients[i].id})" class="btn btn-dark">editar</button>
                    <button onclick="deleteClient(${clients[i].id})" class="btn btn-danger">eliminar</button>
                </td>
            </tr>
        `;
    }

    $("#bodyList").html(client);
}