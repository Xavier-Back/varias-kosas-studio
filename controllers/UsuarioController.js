import { buscarUsuario } from "../models/usuarioModel.js";
import { generaAlerta } from "../helpers/alerts.js";



function iniciarSesion() {
    // Llamar a la función buscarUsuario del modelo usuarioModel.js
    let correo = document.querySelector('#correo').value
    let contrasena = document.querySelector('#clave').value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        generaAlerta('Bienvenido', 'Sera redireccionado a la pagina principal', 'succsess')
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 3000)
    }
    generaAlerta('Error', 'Usuario o contraseña incorrectos', 'error')
    setTimeout(() => {
        return window.location.href = "/index.html"
    },3000)
}

document.querySelector('#btn-login').addEventListener('click', iniciarSesion)
