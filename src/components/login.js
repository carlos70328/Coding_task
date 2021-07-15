let id = 0;

export const iniciarSesion = (n, m) => {
    let arreglo = []
    let validacion = true

    arreglo = JSON.parse(localStorage.getItem('usuarios'))

    if (arreglo === null) {
        return true
    }
    else {
        arreglo.map(usuarios => {
            if (usuarios.nom === n) {

                if (usuarios.cont === m) {
                    validacion = false;
                    id = arreglo.indexOf(usuarios)
                }
            }
            return validacion
        })
        return validacion
    }
}

export const tomarid = () => {

    return id
}

