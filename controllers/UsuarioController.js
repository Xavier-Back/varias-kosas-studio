import { buscarUsuario } from "../models/usuarioModel.js";
import { generaAlerta } from "../helpers/alerts.js";
import { setLocalStorage } from "../helpers/local-storage.js";
import { generarTokenLimpio } from "../helpers/generators.js";



function iniciarSesion() {
    // Llamar a la función buscarUsuario del modelo usuarioModel.js
    let correo = document.querySelector('#correo').value
    let contrasena = document.querySelector('#clave').value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        setLocalStorage('usuario', auth)
        localStorage.setItem('token', generarTokenLimpio())
        generaAlerta('Bienvenido', 'Sera redireccionado a la pagina principal', 'succsess')
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        }, 1000)
        return
    }
    generaAlerta('Error', 'Usuario o contraseña incorrectos', 'error')
    setTimeout(() => {
        return window.location.href = "/index.html"
    },3000)
}

document.querySelector('#btn-login').addEventListener('click', iniciarSesion)
