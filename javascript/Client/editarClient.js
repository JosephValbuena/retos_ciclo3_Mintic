function editClient(id) {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/" + id,
        type: "GET",
        success: function(data) {
            $("#formEditar").show();
            $("#formCrear").hide();
            putClient(data.items);
        }
    });
}

function sendClient() {
    var datos = {
        id: $("#idClientEdit").val(),
        name: $("#nameEdit").val(),
        email: $("#emailEdit").val(),
        age: $("#ageEdit").val()
    };

    var dataToSend = JSON.stringify(datos);

    if (validarEdit()) {
        $.ajax({
            url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
            type: "PUT",
            data: dataToSend,
            contentType: "application/json",
            dataType: "JSON",
            statusCode: {
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
    }

}

function putClient(data) {
    $("#idClientEdit").val(data[0].id);
    $("#nameEdit").val(data[0].name);
    $("#emailEdit").val(data[0].email);
    $("#ageEdit").val(data[0].age);
}