function editAdmin(id) {

    $.ajax({
        url: "http://localhost:8080/api/Admin/" + id,
        type: "GET",
        success: function(data) {
            $("#idEdit").val(data.idAdmin);
            $("#nameEdit").val(data.name);
            $("#emailEdit").val(data.email);
            $("#passwordEdit").val(data.password);
        }
    });

    $("#formEdit").show();
}

function sendEdit() {
    datos = {
        idAdmin: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        email: $("#emailEdit").val(),
        password: $("#passwordEdit").val()
    };

    dataToSend = JSON.stringify(datos);

    $.ajax({
        url: "http://localhost:8080/api/Admin/update",
        type: "put",
        dataType: "JSON",
        contentType: "application/json; charset=utf-8",
        data: dataToSend,
        statusCode: {
            200: function(data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha actualizado el admin',
                    showConfirmButton: false,
                    timer: 1500
                });
                getAdmins();
                cancelEdit();
            },
            201: function(data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha actualizado el admin',
                    showConfirmButton: false,
                    timer: 1500
                });
                getAdmins();
                cancelEdit();
            }
        }
    });
}

function cancelEdit() {
    $("#formEdit").hide();
}

$(".closeEdit").click(function() {
    $("#formEdit").hide();
});