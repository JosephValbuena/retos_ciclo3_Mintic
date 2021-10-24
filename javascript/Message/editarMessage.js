function editMessage(id) {
    $.ajax({
        url: "http://localhost:8080/api/Message/" + id,
        type: "GET",
        success: function(data) {
            $("#idEdit").val(data.idMessage);
            $("#costumeEdit").val(data.costume.id);
            $("#clientEdit").val(data.client.idClient);
            $("#messageEdit").val(data.messageText);
        }
    });

    $("#formEdit").show();
    $("#formNew").hide();
}

function sendEditMesage() {
    var datos = {
        "idMessage": parseInt($("#idEdit").val(), 10),
        "costume": {
            "id": parseInt($("#costumeEdit").val(), 10)
        },
        "client": {
            "idClient": parseInt($("#clientEdit").val(), 10)
        },
        "messageText": $("#messageEdit").val()
    };

    var dataToSend = JSON.stringify(datos);

    console.log(datos);

    if (validarEdit()) {
        $.ajax({
            url: "http://localhost:8080/api/Message/update",
            type: "put",
            dataType: "JSON",
            data: dataToSend,
            contentType: "application/json",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualizado el usuario',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getMessages();
                    $("#formEdit").hide();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualizado el usuario',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    getMessages();
                    $("#formEdit").hide();
                }
            },

        });
    }

}

function cancelEdit() {
    $("#formEdit").hide();
}

$(".closeEdit").click(function() {
    $("#formEdit").hide();
});