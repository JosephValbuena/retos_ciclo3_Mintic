function deleteCategory(id) {
    Swal.fire({
        title: '¿está seguro de eliminar la categoria?',
        text: "Esta acción no será reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrala'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "http://129.151.118.226:8080/api/Category/" + id,
                type: 'delete',
                statusCode: {
                    200: function() {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Se ha borrado la categoria',
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
                            title: 'Se ha borrado la categoria',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        getCategories();
                        cancelEdit();
                    }
                }
            });
        }
    });
}