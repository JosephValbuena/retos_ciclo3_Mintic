function openForm() {
    $("#cNuevo").show();
    $("#cEditar").hide();
}

function newCostume() {
    var nCostume = {
        id: $("#idCostume").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category").val(),
        name: $("#name").val()
    };

    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "POST",
        data: nCostume,
        dataType: "JSON",
        statusCode: {
            201: function() {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se ha subido el nuevo traje',
                    showConfirmButton: false,
                    timer: 1500
                });

                listar();
                cancelar();
            }
        }
    });
}

function cancelar() {
    $("#cNuevo").hide();
    $("#cEditar").hide();
}