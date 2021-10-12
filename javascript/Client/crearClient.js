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
            success: function(data) {
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

function getListClients() {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        success: function(data) {
            comprobarId(data.items);
        }
    });
}

function comprobarId(data) {
    var id = $("#idClient").val();

    for (var i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pueden tener dos IDs iguales!'
            });
            return false;
        }
    }

    return true;
}

$("#close-popup").click(function() {
    $("#formCrear").hide();
});