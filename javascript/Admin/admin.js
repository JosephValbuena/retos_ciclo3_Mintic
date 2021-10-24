$(document).ready(function() {
    $("#formCrear").hide();
    $("#formEdit").hide();
    getAdmins();
});

function getAdmins() {
    $.ajax({
        url: "http://localhost:8080/api/Admin/all",
        type: "GET",
        success: function(data) {
            putAdmins(data);
        }
    });
}

function putAdmins(data) {
    var admins = "";

    for (var i = 0; i < data.length; i++) {
        admins += `
                    <tr>
                        <td>${data[i].idAdmin}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>
                            <button onclick="editAdmin(${data[i].idAdmin})" class="btn btn-dark">Editar</button>
                            <button onclick="deleteAdmin(${data[i].idAdmin})" class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                `;
    }

    $("#bodyList").html(admins);
}