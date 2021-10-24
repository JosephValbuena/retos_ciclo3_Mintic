function openNClient() {
    $("#formEditar").hide();
    $("#formCrear").show();
}

function createClient() {
    var datos = {
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
        password: $("#password").val()
    };

    var dataToSend = JSON.stringify(datos);

    if (validarNew()) {

        $.ajax({
            url: "http://localhost:8080/api/Client/save",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json",
            statusCode: {
                200: function(data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo cliente',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getClients();
                    cancelClient();
                },
                201: function(data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo cliente',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getClients();
                    cancelClient();
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
    }
}

function cancelClient() {
    $("#formEditar").hide();
    $("#formCrear").hide();
}




$("#close-popup").click(function() {
    $("#formCrear").hide();
});