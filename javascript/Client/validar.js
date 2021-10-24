function validaesVacio(dato) {
    return !dato.trim().length;
}

function validarNew() {
    //obtiene valores
    let name = $("#name").val();
    let email = $("#email").val();
    let age = $("#age").val();
    var password = $("#password").val();

    //valida que los campos no sean vacios
    if (validaesVacio(name)) {
        Swal.fire('El nombre no puede ser vacío');
        return false;
    } else if (validaesVacio(email)) {
        Swal.fire('El email no puede ser vacío');
        return false;
    } else if (validaesVacio(age)) {
        Swal.fire('La edad no pueden ser vacía');
        return false;
    } else if (validaesVacio(password)) {
        Swal.fire('La contraseña no puede ser vacía');
        return false;
    }

    return true;
}

function validarEdit() {
    //obtiene valores
    var id = $("#idEdit").val();
    var name = $("#nameEdit").val();
    var email = $("#emailEdit").val();
    var age = $("#ageEdit").val();


    //valida que los campos no sean vacios
    if (validaesVacio(id)) {
        Swal.fire('El id no puede ser vacío');
        return false;
    } else if (validaesVacio(name)) {
        Swal.fire('El nombre no puede ser vacío');
        return false;
    } else if (validaesVacio(email)) {
        Swal.fire('El correo no puede ser vacío');
        return false;
    } else if (validaesVacio(age)) {
        Swal.fire('La edad no puede ser vacía');
        return false;
    }

    return true;
}