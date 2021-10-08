function validaesVacio(dato) {
    return !dato.trim().length;
}

function validarNew() {
    //obtiene valores
    let id = $("#idClient").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let age = $("#age").val();
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(id)) {
        Swal.fire('El id no puede ser vacío');
        return false;
    } else if (validaesVacio(name)) {
        Swal.fire('El nombre no puede ser vacío');
        return false;
    } else if (validaesVacio(email)) {
        Swal.fire('El email no puede ser vacío');
        return false;
    } else if (validaesVacio(age)) {
        Swal.fire('La edad no pueden ser vacía');
        return false;
    }

    return true;
}

function validarEdit() {
    //obtiene valores
    var id = $("#idClientEdit").val();
    var name = $("#nameEdit").val();
    var email = $("#emailEdit").val();
    var age = $("#ageEdit").val();

    //valida que los campos no sean vacios
    if (validaesVacio(id)) {
        alert("El id no puede ser vacío");
        return false;
    } else if (validaesVacio(name)) {
        alert("El nombre no puede ser vacío");
        return false;
    } else if (validaesVacio(email)) {
        alert("El email no puede ser vacío");
        return false;
    } else if (validaesVacio(age)) {
        alert("La edad no puede ser vacío");
        return false;
    }

    return true;
}