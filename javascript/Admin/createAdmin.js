function openNAdmin() {
    $("#formCrear").show();
}

function createAdmin() {

    data = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };

    var dataToSend = JSON.stringify(data);

    if (validar()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Admin/save",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: dataToSend,
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo Admin',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getAdmins();
                    cancelAdmin();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado el nuevo Admin',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getAdmins();
                    cancelAdmin();
                }
            }
        });
    }
}

function cancelAdmin() {
    $("#formCrear").hide();
}