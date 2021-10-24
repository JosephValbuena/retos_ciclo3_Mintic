function openNMessage() {
    $("#formEdit").hide();
    $("#formNew").show();

    $.ajax({
        url: "http://129.151.118.226:8080/api/Costume/all",
        type: "GET",
        success: function(data) {
            var option = "";
            for (var i = 0; i < data.length; i++) {
                option += `
                    <option value="${data[i].id}">${data[i].name}</option>
                `
            }

            $("#costume").html(option);
        }
    });

    $.ajax({
        url: "http://129.151.118.226:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            var option = "";
            for (var i = 0; i < data.length; i++) {
                option += `
                    <option value="${data[i].idClient}">${data[i].name}</option>
                `
            }

            $("#client").html(option);
        }
    });
}

function createMessage() {
    var datos = {
        "messageText": $("#message").val(),
        "costume": {
            id: $("#costume").val()
        },
        "client": {
            idClient: $("#client").val()
        },
    };

    console.log(datos);

    var dataToSend = JSON.stringify(datos);

    if (validarNew()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Message/save",
            type: "POST",
            data: dataToSend,
            contentType: "application/json",
            dataType: "json",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo mensaje',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getMessages();
                    cancelMessage();
                },

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
            }
        });
    }
}



function cancelMessage() {
    $("#formEdit").hide();
    $("#formNew").hide();
}

$("#close-popup").click(function() {
    $("#formNew").hide();
});