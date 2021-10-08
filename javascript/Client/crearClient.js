function openNClient() {
    $("#formEditar").hide();
    $("#formCrear").show();
}

function createClient() {
    var datos = {
        id: $("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };

    if (validarNew()) {

        $.ajax({
            url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type: "POST",
            data: datos,
            dataType: "json",
            statusCode: {
                201: function() {
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