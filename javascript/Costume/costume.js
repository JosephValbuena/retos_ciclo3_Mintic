$(document).ready(function() {
    $("#cEditar").hide();
    $("#cNuevo").hide();
    listar();
});

// get para la lista
function listar() {
    $.ajax({
        url: "http://localhost:8080/api/Costume/all",
        type: "GET",
        success: function(data) {
            console.log(data);
            getCostumes(data);
        }
    });
}

function getCostumes(items) {
    var table = "";
    for (var i = 0; i < items.length; i++) {
        table += `
        <tr>
        <td>${items[i].brand}</td>
        <td>${items[i].year}</td>
        <td>${items[i].name}</td>
        <td>${items[i].description}</td>
        <td>
            <button onclick="editCostume(${items[i].id})" class="btn btn-dark">Editar</button>
            <button onclick="deleteCostume(${items[i].id})" class="btn btn-danger">Eliminar</button>
        </td>
        </tr>
        `;
    }

    $("tbody").html(table);
}
//Fin de petición get para la lista