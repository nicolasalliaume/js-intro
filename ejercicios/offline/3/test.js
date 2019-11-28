/*-----------------------------------------------
 Tests Ejercicio 3 - Offline.

 Correr `npm run test ejercicios/offline/3/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { min, younger, youngest } = require('./e3.js')
const assert = require('assert');

describe('#ejercicio offline 3', function() {

    describe('#min', function() {

        it('retorna el primero cuando el primero es menor', function() {
            assert.equal(min(1, 2), 1)
        })

        it('retorna el segundo cuando el segundo es menor', function () {
            assert.equal(min(2, 1), 1)
        })

        it('retorna cualquiera cuando son iguales', function () {
            assert.equal(min(2, 2), 2)
        })

    })

    describe('#younger', function () {

        const p1 = { nombre: 'Jean-Claude', age: 59 }
        const p2 = { nombre: 'Sylvester', age: 73 }

        it('retorna el primero cuando el primero es menor', function () {
            assert.equal(younger(p1, p2), p1)
        })

        it('retorna el segundo cuando el segundo es menor', function () {
            assert.equal(younger(p2, p1), p1)
        })

        it('retorna cualquiera cuando tienen la misma edad', function () {
            assert.equal(younger(p1, p1), p1)
        })

    })

    describe('#youngest', function () {

        const p1 = { name: 'Jean-Claude', age: 59 }
        const p2 = { name: 'Sylvester', age: 73 }
        const p3 = { name: 'Uma', age: 49 }
        const p4 = { name: 'Jaden', age: 21 }

        it('retorna el menor de la lista al final', function () {
            assert.equal(youngest([p1, p2, p3, p4]), p4)
        })

        it('retorna el menor de la lista en el medio', function () {
            assert.equal(youngest([p1, p4, p2, p3]), p4)
        })

    })

})