$(document).ready(function() {
    $("#formCrear").hide();
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
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].age}</td>
                    </tr>
                `;
    }

    $("#bodyList").html(admins);
}