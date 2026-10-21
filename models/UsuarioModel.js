const usuarios = [
    {
        nombre: 'Duvan Xavier',
        correo: 'duvanxavier@gmail.com',
        contrasena: '1234567',
        id: '1xavier2345'
    },

    {
        nombre: 'Juan Carlos',
        correo: 'juan@gmail.com',
        contrasena: '123456',
        id: '1juan2345'
    }
]

export function guardarUsuario() {

}

export function buscarUsuario(correo, contrasena) {
    let auth = usuarios.some((usuario) => correo == usuario.correo && contrasena == usuario.contrasena)
    return auth

}