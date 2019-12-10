/*-----------------------------------------------
 Tests Ejercicio 2 - Offline.

 Correr `npm run test ejercicios/offline/2/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { toKeyValuePairs } = require('./e2.js')
const assert = require('assert');

describe('#ejercicio offline 2', function() {

    describe('#toKeyValuePairs', function() {

        it('retorna un array vacio cuando el objeto es vacío', function() {
            assert.deepStrictEqual(toKeyValuePairs({}), [])
        })

        it('retorna un array con claves y valores cuando el objeto no es vacío', function () {
            assert.deepStrictEqual(toKeyValuePairs({a: 1, b: 2}), [['a', 1], ['b', 2]])
        })

    })
})