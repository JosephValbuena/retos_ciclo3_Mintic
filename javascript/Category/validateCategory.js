function validaesVacio(dato) {
    return !dato.trim().length;
}

function validarNew() {

    var name = $("#name").val();
    var description = $("#description").val();

    if (validaesVacio(name)) {
        Swal.fire("El nombre no puede ser vacío");
        return false;
    } else if (validaesVacio(description)) {
        Swal.fire("La descripción no puede ser vacía");
        return false;
    }

    return true;
}

function validarEdit() {
    var name = $("#nameEdit").val();
    var description = $("#descriptionEdit").val();

    if (validaesVacio(name)) {
        Swal.fire("El nombre no puede ser vacío");
        return false;
    } else if (validaesVacio(description)) {
        Swal.fire("La descripción no puede ser vacía");
        return false;
    }

    return true;
}