/*-----------------------------------------------
 Tests Ejercicio 2.

 Correr `npm run test ejercicios/live/2/test.js` desde dentro del repo.
 
 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { max, longest, propOrElse } = require('./e2.js')
const assert = require('assert');

describe('#ejercicio 2', function () {

    describe('#max', function () {

        it('retorna null cuando el array está vacío', function () {
            assert.equal(max([]), null)
        })

        it('retorna el único valor del array cuando hay sólo uno', function () {
            assert.equal(max([1]), 1)
        })

        it('retorna el mayor del array cuando hay más de un número', function () {
            assert.equal(max([1, 2, 3, 4, 3, 2, 1]), 4)
        })

    })

    describe('#longest', function () {

        it('retorna null cuando el array está vacío', function () {
            assert.equal(longest([]), null)
        })

        it('retorna el único valor del array cuando hay sólo uno', function () {
            assert.equal(longest([1]), 1)
        })

        it('retorna el más largo del array cuando hay más de un string', function () {
            assert.equal(longest(['pola', 'nico', 'fiorella', 'juan', 'martín']), 'fiorella')
        })

    })


    describe('#propOrElse', function () {

        it('retorna default si la propiedad no existe en el objeto', function () {
            assert.equal(propOrElse('nombre', 'ninguno', {}), 'ninguno')
        })

        it('retorna el valor de la propiedad si existe en el objeto', function () {
            assert.equal(propOrElse('nombre', 'ninguno', { nombre: 'Arnold Schwarzenegger' }), 'Arnold Schwarzenegger')
        })

    })

})