function validaesVacio(dato) {
    return !dato.trim().length;
}

function validar() {
    var id_costume = $("#costume").val();
    var id_client = $("#client").val();
    var deliver_date = $("#dateE").val();

    if (validaesVacio(id_costume)) {
        Swal.fire("Se debe seleccionar un disfraz");
        return false;
    } else if (validaesVacio(id_client)) {
        Swal.fire("Se debe seleccionar un cliente");
        return false;
    } else if (validaesVacio(deliver_date)) {
        Swal.fire("Se debe seleccionar una fecha de entrega");
        return false;
    }

    return true;
}

function validarC() {

    message = $("#message").val();
    if (validaesVacio(message)) {
        Swal.fire("El mensaje no puede ser vacío");
        return false;
    }

    return true;
}