$(document).ready(function() {
    $("#formEditar").hide();
    $("#formCrear").hide();
    getCategories();
});

function getCategories() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        success: function(data) {
            putCategories(data);
            getCostumes(data);
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
                <td><button onclick="editCategory(${data[i].id})" class="btn btn-dark">editar</button></td>
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
}

function getCostumes(categories) {
    $.ajax({
        url: "http://localhost:8080/api/Costume/all",
        type: "GET",
        success: function(data) {
            putCostumes(data, categories);
        }
    });
}

function putCostumes(data, categories) {

    var objetos = new Map();
    var guardar = [];
    var costumes = "";

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < categories.length; j++) {
            if (data[i].category_id == categories[j].id) {
                costumes = `
                    <tr>
                        <td>${data[i].brand}</td>
                        <td>${data[i].year}</td>
                        <td>${data[i].category_id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
                    </tr>
                `;

                guardar.push(costumes);

                if (objetos.size == 0) {
                    objetos.set(categories[j].id, guardar);
                    guardar = [];
                    break;
                }

                if (objetos.has(categories[j].id)) {
                    var nuevo = objetos.get(categories[j].id);
                    nuevo.push(costumes);
                    objetos.set(categories[j].id, nuevo);
                } else {
                    objetos.set(categories[j].id, guardar);
                }

                guardar = [];
            }
        }
    }

    for (let [key, value] of objetos) {

        var datos = "";
        for (var i = 0; i < value.length; i++) {
            datos += value[i];
        }

        $("#tbody-" + key).html(datos);
    }



}