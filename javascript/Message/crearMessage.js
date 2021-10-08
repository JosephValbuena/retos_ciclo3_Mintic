function openNMessage() {
    $("#formEdit").hide();
    $("#formNew").show();
}

function createMessage() {
    var datos = {
        id: $("#idMessage").val(),
        messagetext: $("#message").val()
    };

    if (validarNew()) {

        $.ajax({
            url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type: "POST",
            data: datos,
            dataType: "json",
            statusCode: {
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo mensaje',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getMessages();
                    cancelMessage();
                }
            },
        });
    }
}

function getListMessages() {
    var comprobar;
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        success: function(data) {
            comprobar = comprobarId(data.items);
            console.log(comprobar);
        }
    });

}

function comprobarId(data) {
    console.log(data);
    var id = $("#idMessage").val();
    console.log(typeof(id));
    for (var i = 0; i < data.length; i++) {
        console.log(typeof(data[i].id));
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

function cancelMessage() {
    $("#formEdit").hide();
    $("#formNew").hide();
}