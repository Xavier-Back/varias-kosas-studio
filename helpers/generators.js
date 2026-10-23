/**
 * Genera un token aleatorio seguro sin usar condicionales ni librerías.
 * @param {number} longitud - Longitud de caracteres deseada para el token.
 * @returns {string} El token generado.
 */
 export function generarTokenLimpio(longitud = 32) {
    const bytes = new Uint8Array(Math.ceil(longitud / 2));
    crypto.getRandomValues(bytes);
    
    return Array.from(bytes)
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        .slice(0, longitud);
}

