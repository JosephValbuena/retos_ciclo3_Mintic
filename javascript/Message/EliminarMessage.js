function deleteMessage(id) {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar el mensaje?',
        text: "Esto no será reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
        if (result.isConfirmed) {


            $.ajax({
                url: "http://129.151.118.226:8080/api/Message/" + id,
                type: "DELETE",
                statusCode: {
                    200: function() {
                        getMessages();
                        $("#formEdit").hide();
                        $("#formNew").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El mensaje ha sido eliminado.',
                            'success'
                        );
                    },
                    201: function() {
                        getMessages();
                        $("#formEdit").hide();
                        $("#formNew").hide();
                        Swal.fire(
                            'Eliminado!',
                            'El mensaje ha sido eliminado.',
                            'success'
                        );
                    }
                }
            });
        }
    });

}