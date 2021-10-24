function editClient(id) {
    $.ajax({
        url: "http://129.151.118.226:8080/api/Client/" + id,
        type: "GET",
        success: function(data) {
            putClient(data);
            $("#formEditar").show();
        }
    });
}

function sendClient() {
    var datos = {
        idClient: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        email: $("#emailEdit").val(),
        age: $("#ageEdit").val(),
        password: $("#passwordEdit").val()
    };

    var dataToSend = JSON.stringify(datos);
    if (validarEdit()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Client/update",
            type: "put",
            data: dataToSend,
            contentType: "application/json",
            dataType: "JSON",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha subido el nuevo usuario',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getClients();
                    $("#formEditar").hide();
                    $("#formCrear").hide();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha subido el nuevo usuario',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getClients();
                    $("#formEditar").hide();
                    $("#formCrear").hide();
                }
            },
            error: function(message) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo ha salido mal. Error: ' + message.status,
                    footer: 'Comprueba que todo esté correcto y que no se repita el id'
                });
            }
        });
    } else {
        console.log("no pase")
    }

}

function putClient(data) {
    $("#idEdit").val(data.idClient);
    $("#nameEdit").val(data.name);
    $("#emailEdit").val(data.email);
    $("#ageEdit").val(data.age);
    $("#passwordEdit").val(data.password);
}

function cancelEdit() {
    $("#formEditar").hide();
}

$(".closeEdit").click(function() {
    $("#formEditar").hide();
});