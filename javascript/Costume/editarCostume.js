function editCostume(id) {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume/" + id,
        type: "GET",
        success: function(data) {
            putText(data.items);
            $("#cEditar").show();
            $("#cNuevo").hide();
        }
    });
}

function putText(items) {
    $("#idCostumeEdit").val(items[0].id);
    $("#brandEdit").val(items[0].brand);
    $("#modelEdit").val(items[0].model);
    $("#categoryEdit").val(items[0].category_id);
    $("#nameEdit").val(items[0].name);
}