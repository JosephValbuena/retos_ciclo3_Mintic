function deleteAdmin(id) {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar el cliente?',
        text: "Esto no será reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
        if (result.isConfirmed) {

            $.ajax({
                url: "http://129.151.118.226:8080/api/Admin/" + id,
                type: "DELETE",
                statusCode: {
                    200: function() {
                        getAdmins();
                        $("#formEditar").hide();
                        $("#formCrear").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El admin ha sido eliminado.',
                            'success'
                        );

                    },
                    201: function() {
                        getAdmins();
                        $("#formEditar").hide();
                        $("#formCrear").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El admin ha sido eliminado.',
                            'success'
                        );
                    }
                }
            });
        }
    });
}