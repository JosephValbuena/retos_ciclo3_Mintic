$(document).ready(function() {
    $("#cEditar").hide();
    $("#cNuevo").hide();
    listar();
});

// get para la lista
function listar() {
    $.ajax({
        url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/costume/costume",
        type: "GET",
        success: function(data) {
            console.log(data.items);
            getCostumes(data.items);
        }
    });
}

function getCostumes(items) {
    var table = "";
    for (var i = 0; i < items.length; i++) {
        table += `
        <tr>
        <td>${items[i].id}</td>
        <td>${items[i].brand}</td>
        <td>${items[i].model}</td>
        <td>${items[i].category_id}</td>
        <td>${items[i].name}</td>
        <td>
            <button onclick="editCostume(${items[i].id})" class="btn btn-primary">Editar</button>
            <button onclick="deleteCostume(${items[i].id})" class="btn btn-danger">Eliminar</button>
        </td>
        </tr>
        `;
    }

    $("tbody").html(table);
}
//Fin de petición get para la lista