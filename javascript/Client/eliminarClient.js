function deleteClient(id) {
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
                url: "http://localhost:8080/api/Client/" + id,
                type: "DELETE",
                statusCode: {
                    200: function() {
                        getClients();
                        $("#formEditar").hide();
                        $("#formCrear").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El cliente ha sido eliminado.',
                            'success'
                        );
                    },
                    201: function() {
                        getClients();
                        $("#formEditar").hide();
                        $("#formCrear").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El cliente ha sido eliminado.',
                            'success'
                        );
                    }
                }
            });
        }
    });
}