function validaesVacio(dato) {
    return !dato.trim().length;
}

function validarNew() {
    //obtiene valores
    let message = $("#message").val();

    //valida que los campos no sean vacios
    if (validaesVacio(message)) {
        Swal.fire('El mensaje no puede ser vacío');
        return false;
    }

    return true;
}

// function validarEdit() {
//     let id = $("#idMessageEdit").val();
//     let message = $("#messageEdit").val();

//     valida que los campos no sean vacios
//     if (validaesVacio(id)) {
//         Swal.fire('El id no puede ser vacío');
//         return false;
//     } else if (validaesVacio(message)) {
//         Swal.fire('El mensaje no puede ser vacío');
//         return false;
//     }

//     return true;
// }