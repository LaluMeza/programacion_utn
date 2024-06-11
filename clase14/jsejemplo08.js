function validarForm(){
    const nombreValido = true
    const passwordValido = validarLargo(document.form.text1.value, 5)

    console.log(nombreValido, passwordValido)

    const resultado = nombreValido && passwordValido
    if (resultado) {
        alert ('ES VALIDO')
    } else {
        alert ('NO ES VALIDO')
    }
}


function validarLargo(texto, largoRequerido){
    return texto.length >= largoRequerido
}