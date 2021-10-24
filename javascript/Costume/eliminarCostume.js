function deleteCostume(id) {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar el disfraz?',
        text: "Esto no será reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: "http://localhost:8080/api/Costume/" + id,
                type: "DELETE",
                statusCode: {
                    200: function() {
                        listar();
                        Swal.fire(
                            'Eliminado!',
                            'El disfraz ha sido eliminado.',
                            'success'
                        );
                    },
                    201: function() {
                        listar();
                        Swal.fire(
                            'Eliminado!',
                            'El disfraz ha sido eliminado.',
                            'success'
                        );
                    }
                }

            });


        }
    })
}