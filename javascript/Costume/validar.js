function validaesVacio(dato) {
    return !dato.trim().length;
}

function validarNew() {
    var brand = $("#brand").val();
    var year = $("#year").val();
    var name = $("#name").val();
    var description = $("#description").val();

    if (validaesVacio(brand)) {
        Swal.fire("La marca no puede ser vacía");
        return false;
    } else if (brand.length > 45) {
        Swal.fire("La marca no puede contener más de 45 caracteres");
        return false;
    } else if (validaesVacio(year)) {
        Swal.fire("El año no puede ser vacío");
        return false;
    } else if (year.length != 4) {
        Swal.fire("El año debe ser calendario");
        return false;
    } else if (validaesVacio(name)) {
        Swal.fire("El nombre no puede ser vacío");
        return false;
    } else if (name.length > 45) {
        Swal.fire("El nombre no puede contener más de 45 caracteres");
        return false;
    } else if (validaesVacio(description)) {
        Swal.fire("La descripción no puede ser vacía");
        return false;
    } else if (description > 250) {
        Swal.fire("La descripción no contener más de 250 caracteres");
        return false;
    }

    return true;
}