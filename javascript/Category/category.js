$(document).ready(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
    getCategories();
});

function getCategories() {
    $.ajax({
        url: "http://129.151.118.226:8080/api/Category/all",
        type: "GET",
        success: function(data) {
            putCategories(data);
        },
        error: function(message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo ha salido mal. Error: ' + message.status,
            });
        }
    });
}

function putCategories(data) {
    var categories = "";
    var tables = "";
    for (var i = 0; i < data.length; i++) {

        categories += `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].description}</td>
                <td>
                    <button onclick="editCategory(${data[i].id})" class="btn btn-dark">editar</button>
                    <button onclick="deleteCategory(${data[i].id})" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        `;

        tables += `
            <div class="card">
                <div class="card-header">
                    Tabla de disfraces con categoria: <strong>${data[i].name}</strong>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>MARCA</th>
                            <th>AÑO</th>
                            <th>ID_C</th>
                            <th>NOMBRE</th>
                            <th>DESCRIPCION</th>
                        </tr>
                    </thead>
                    <tbody id="tbody-${data[i].id}">

                    </tbody>
                    </table>
                </div>
            </div>
            
            <br>
        `;
    }

    $("#categoryT").html(categories);
    $("#tablesC").html(tables);

    putCostumes(data);
}


function putCostumes(data) {

    var putCostum = "";

    for (var i = 0; i < data.length; i++) {
        var costumes = data[i].costumes;
        for (var j = 0; j < costumes.length; j++) {

            putCostum += `
            <tr>
                <td>${costumes[j].brand}</td>
                <td>${costumes[j].year}</td>
                <td>${data[i].id}</td>
                <td>${costumes[j].name}</td>
                <td>${costumes[j].description}</td>
            </tr>
            `;
        }
        $(`#tbody-${data[i].id}`).html(putCostum);
        putCostum = "";
    }

}