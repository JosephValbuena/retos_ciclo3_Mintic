function openNMessage() {
    $("#formEdit").hide();
    $("#formNew").show();

    $.ajax({
        url: "http://localhost:8080/api/Costume/all",
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
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        success: function(data) {
            var option = "";
            for (var i = 0; i < data.length; i++) {
                option += `
                    <option value="${data[i].id}">${data[i].name}</option>
                `
            }

            $("#client").html(option);
        }
    });
}

function createMessage() {


    var datos = {
        "messagetext": $("#message").val(),
        costume: {
            id: $("#costume").val()
        },
        client: {
            id: $("#client").val()
        },
    };

    console.log(datos)

    var dataToSend = JSON.stringify(datos);

    if (validarNew()) {

        var ver = $.ajax({
            url: "http://localhost:8080/api/Message/save",
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

        console.log(ver);
    }
}



function cancelMessage() {
    $("#formEdit").hide();
    $("#formNew").hide();
}

$("#close-popup").click(function() {
    $("#formNew").hide();
});