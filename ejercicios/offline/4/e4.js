/*-----------------------------------------------
 Ejercicio 4 - Offline.
 -------------------

 🔶 Desafío: Escribir una función `change()` que retorna el cambio que se 
    le debe entregar a un cliente al realizar una compra dependiendo
    del monto con el que paga.

    Las denominaciones disponibles son: 
        - Monedas: 1, 2, 5, 10
        - Billetes: 20, 50, 100, 200, 500, 1000, 2000

    El resultado deberá ser un array con los elementos (monedas y billetes)
    que se deben devolver.

    Ej:
        - Una compra de $120 que se paga con un billete de $20 genera
        el siguiente resultado:

            change(7, 10) => [1, 2] // 1 moneda de $1 y una moneda de $2

        - Una compra de $16 que se paga con un billete de $20 genera
        el siguiente resultado:

            change(7, 10) => [2, 2] // 2 monedas de $2

        - Una compra de $120 que se paga con un billete de $200 genera
        el siguiente resultado:
        
            change(120, 2000) => [10, 20, 50]

        - Una compra de $120 que se paga con un billete de $2000 genera
        el siguiente resultado:

            change(120, 2000) => [10, 20, 50, 100, 200, 500, 1000]


 🧪 Test:
 Correr `npm run test ejercicios/offline/4/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/


// 👇 Escribe el código aquí




/*-------------------
 * Exports.
 * No tocar.
 */
module.exports = { change }