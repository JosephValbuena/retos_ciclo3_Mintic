function editCostume(id) {
    $.ajax({
        url: "http://localhost:8080/api/Costume/" + id,
        type: "GET",
        success: function(data) {
            console.log(data);
            putText(data);
            $("#cEditar").show();
            $("#cNuevo").hide();
        }
    });
}

function sendEdit() {
    data = {
        id: parseInt($("#idCostumeEdit").val(), 10),
        brand: $("#brandEdit").val(),
        name: $("#nameEdit").val(),
        description: $("#descpEdit").val(),
        year: parseInt($("#yearEdit").val(), 10)
    }

    dataToSend = JSON.stringify(data);

    if (validarEdit()) {
        $.ajax({
            url: "http://localhost:8080/api/Costume/update",
            type: "PUT",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualizado el disfraz',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    listar();
                    cancelar();
                },
                201: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha actualizado el disfraz',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    listar();
                    $("#cEditar").hide();
                }
            }
        });
    }
}

function putText(items) {
    $("#idCostumeEdit").val(items.id);
    $("#brandEdit").val(items.brand);
    $("#nameEdit").val(items.name);
    $("#descpEdit").val(items.description);
    $("#yearEdit").val(items.year);
}

$(".closeEdit").click(function() {
    $("#cEditar").hide();
});