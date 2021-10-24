function openNewCategory() {
    $("#formEditar").hide();
    $("#formCrear").show();
}

function createCategory() {

    datos = {
        name: $("#name").val(),
        description: $("#description").val()
    };

    dataToSend = JSON.stringify(datos);

    if (validarNew()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Category/save",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado la nueva categoria',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getCategories();
                    cancelCategory();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha creado la nueva categoria',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getCategories();
                    cancelCategory();
                }
            }
        });
    }
}

$("#close-popup").click(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
});

function cancelCategory() {
    $("#formEditar").hide();
    $("#formCrear").hide();
}