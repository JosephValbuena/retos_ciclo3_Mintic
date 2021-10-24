$(document).ready(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
    getClients();
});

function getClients() {
    $.ajax({
        url: "http://129.151.118.226:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            clientLists(data);
        }
    });
}

function clientLists(clients) {
    var client = "";
    for (var i = 0; i < clients.length; i++) {
        client += `
            <tr>
                <td>${clients[i].idClient}</td>
                <td>${clients[i].name}</td>
                <td>${clients[i].email}</td>
                <td>${clients[i].age}</td>
                <td>
                    <button onclick="editClient(${clients[i].idClient})" class="btn btn-dark">editar</button>
                    <button onclick="deleteClient(${clients[i].idClient})" class="btn btn-danger">eliminar</button>
                </td>
            </tr>
        `;
    }

    $("#bodyList").html(client);
}