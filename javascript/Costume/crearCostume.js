function openForm() {
    $("#cNuevo").show();
    $("#cEditar").hide();

    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        success: function(data) {
            var options = "";
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                options += `
                    <option value="${data[i].id}">${data[i].name}</option>
                `;
            }
            $("#category").html(options);

        }
    });
}

function newCostume() {

    var nCostume = {
        brand: $("#brand").val(),
        year: $("#year").val(),
        category_id: {
            id: $("#category").val()
        },
        name: $("#name").val(),
        description: $("#description").val()
    };

    var dataToSend = JSON.stringify(nCostume);

    if (validarNew()) {
        $.ajax({
            url: "http://localhost:8080/api/Costume/save",
            type: "POST",
            data: dataToSend,
            contentType: "application/json",
            dataType: "JSON",
            statusCode: {
                200: function() {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se ha subido el nuevo disfraz',
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
                        title: 'Se ha subido el nuevo disfraz',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    listar();
                    cancelar();
                }
            }
        });
    }

}

$("#close-popup").click(function() {
    $("#cNuevo").hide();
});

function cancelar() {
    $("#cNuevo").hide();
    $("#cEditar").hide();
}