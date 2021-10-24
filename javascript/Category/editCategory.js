function editCategory(id) {
    $.ajax({
        url: "http://129.151.118.226:8080/api/Category/" + id,
        type: "GET",
        success: function(data) {
            console.log(data);
            $("#idEdit").val(data.id);
            $("#nameEdit").val(data.name);
            $("#descriptionEdit").val(data.description);
        }
    });
    $("#formEditar").show();
}

function sendEdit() {
    data = {
        id: $("#idEdit").val(),
        name: $("#nameEdit").val(),
        description: $("#descriptionEdit").val()
    };

    dataToSend = JSON.stringify(data);

    if (validarEdit()) {
        $.ajax({
            url: "http://129.151.118.226:8080/api/Category/update",
            type: "put",
            data: dataToSend,
            dataType: "JSON",
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualiazado la categoria',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getCategories();
                    cancelEdit();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualiazado la categoria',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    getCategories();
                    cancelEdit();
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}

$(".closeEdit").click(function() {
    $("#formEditar").hide();
});

function cancelEdit() {
    $("#formEditar").hide();
}