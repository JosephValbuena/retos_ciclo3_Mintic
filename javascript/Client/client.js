$(document).ready(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
    getClients();
});

function getClients() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            console.log(data);
            clientLists(data);
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