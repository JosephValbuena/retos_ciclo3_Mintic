function editMessage(id) {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/" + id,
        type: "GET",
        success: function(data) {
            putMessageData(data.items);
        }
    });

    $("#formEdit").show();
    $("#formNew").hide();
}

function sendEdit() {
    var datos = {
        id: $("#idMessageEdit").val(),
        messagetext: $("#messageEdit").val()
    };

    var dataToSend = JSON.stringify(datos);

    if (validarEdit()) {
        $.ajax({
            url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
            type: "PUT",
            dataType: "JSON",
            data: dataToSend,
            contentType: "application/json",
            statusCode: {
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha subido el nuevo usuario',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getMessages();
                    $("#formEdit").hide();
                    $("#formNew").hide();
                }
            },

        });
    }

}

function putMessageData(data) {
    $("#idMessageEdit").val(data[0].id);
    $("#messageEdit").val(data[0].messagetext);
}