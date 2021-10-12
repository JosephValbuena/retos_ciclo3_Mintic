function openNewCategory() {
    $("#formEditar").hide();
    $("#formCrear").show();
}

$("#close-popup").click(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
});

function cancelCategory() {
    $("#formEditar").hide();
    $("#formCrear").hide();
}


function createCategory() {

    datos = {
        name: $("#name").val(),
        description: $("#description").val()
    };

    dataToSend = JSON.stringify(datos);

    if (validarNew()) {
        $.ajax({
            url: "http://localhost:8080/api/Category/save",
            type: "POST",
            data: dataToSend,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function(data) {
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
        });
    }


}