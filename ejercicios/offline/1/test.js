/*-----------------------------------------------
 Tests Ejercicio 1 - Offline.

 Correr `npm run test ejercicios/offline/1/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { initArray } = require('./e1.js')
const assert = require('assert');

describe('#ejercicio offline 1', function() {

    describe('#initArray', function() {

        it('retorna un array vacío cuando el largo en 0', function() {
            assert.deepStrictEqual(initArray(0, 'x'), [])
        })

        it('retorna un array el elemento indicado la cantidad de veces dada', function () {
            assert.deepStrictEqual(initArray(4, 'x'), ['x', 'x', 'x', 'x'])
        })

    })
})