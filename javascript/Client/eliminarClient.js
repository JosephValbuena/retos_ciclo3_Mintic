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

            var idCatch = {
                id: id
            };

            var toSend = JSON.stringify(idCatch);

            $.ajax({
                url: "https://gfc2a689900fbad-db202109230629.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
                type: "DELETE",
                data: toSend,
                contentType: "application/JSON",
                dataType: "json",
                statusCode: {
                    204: function() {
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