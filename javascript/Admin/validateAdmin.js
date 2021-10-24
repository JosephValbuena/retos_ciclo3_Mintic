function validaesVacio(dato) {
    return !dato.trim().length;
}

function validar() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    if (validaesVacio(name)) {
        Swal.fire("El nombre no puede ser vacío");
        return false;
    } else if (validaesVacio(email)) {
        Swal.fire("El email no puede ser vacío");
        return false;
    } else if (validaesVacio(password)) {
        Swal.fire("La contraseña no puede ser vacía");
        return false;
    }

    return true;
}