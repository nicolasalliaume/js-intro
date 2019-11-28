/*-----------------------------------------------
 Tests Ejercicio 4 - Offline.

 Correr `npm run test ejercicios/offline/4/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { change } = require('./e4.js')
const assert = require('assert');

describe('#ejercicio offline 4', function () {

    // Para ordenar elementos de menor a mayor
    const ASC = (a, b) => a - b;


    describe('#change', function () {

        it('retorna vacío cuando los montos son iguales', function() {
            assert.deepEqual(change(5, 5).sort(ASC), [])
        })

        it('retorna moneda de 1 cuando difiere en 1', function () {
            assert.deepEqual(change(5, 6).sort(ASC), [1])
        })

        it('retorna moneda de 2 cuando difiere en 2', function () {
            assert.deepEqual(change(5, 7).sort(ASC), [2])
        })

        it('retorna dos monedas de 2 cuando difiere en 4', function () {
            assert.deepEqual(change(5, 9).sort(ASC), [2, 2])
        })

        it('retorna moneda de 1 y moneda de 2 cuando difiere en 3', function () {
            assert.deepEqual(change(5, 8).sort(ASC), [1, 2])
        })

        it('retorna moneda de 1, moneda de 2 y moneda de 5 cuando difiere en 8', function () {
            assert.deepEqual(change(5, 13).sort(ASC), [1, 2, 5])
        })

        it('retorna moneda de 1, moneda de 2, moneda de 5 y moneda de 10 cuando difiere en 18', function () {
            assert.deepEqual(change(2, 20).sort(ASC), [1, 2, 5, 10])
        })

        it('retorna dos monedas de 2, moneda de 5 y moneda de 10 cuando difiere en 19', function () {
            assert.deepEqual(change(1, 20).sort(ASC), [2, 2, 5, 10])
        })

        it('retorna billete de 20 cuando difiere en 20', function () {
            assert.deepEqual(change(30, 50).sort(ASC), [20])
        })

        it('retorna billete de 50 cuando difiere en 50', function () {
            assert.deepEqual(change(50, 100).sort(ASC), [50])
        })

        it('retorna billete de 100 cuando difiere en 100', function () {
            assert.deepEqual(change(100, 200).sort(ASC), [100])
        })

        it('retorna billete de 200 cuando difiere en 200', function () {
            assert.deepEqual(change(300, 500).sort(ASC), [200])
        })

        it('retorna billete de 500 cuando difiere en 500', function () {
            assert.deepEqual(change(500, 1000).sort(ASC), [500])
        })

        it('retorna billete de 1000 cuando difiere en 1000', function () {
            assert.deepEqual(change(1000, 2000).sort(ASC), [1000])
        })

        it('retorna billetes y monedas combinados', function () {
            assert.deepEqual(change(1, 2000).sort(ASC), [2, 2, 5, 20, 20, 50, 200, 200, 500, 1000])
        })

    })
})