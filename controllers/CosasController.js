import { getLocalStorage, removeLocalStorage} from "../helpers/local-storage.js";
import { generaAlerta } from "../helpers/alerts.js";


let usuario = getLocalStorage('usuario')


if (!localStorage.getItem('token')){
    window.location.href = '/index.html'
}

document.querySelector('#info-usuario').textContent = `Usuario:  ${usuario.nombre}`

document.querySelector('#btn-salir').addEventListener('click', () => {
    removeLocalStorage("usuario")
    localStorage.removeItem("token")
    window.location.href = '/index.html'
})