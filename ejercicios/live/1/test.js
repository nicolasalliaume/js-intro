/*-----------------------------------------------
 Tests Ejercicio 1.

 Correr `npm run test ejercicios/live/1/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { div, concat, max } = require('./e1.js')
const assert = require('assert');

describe('#ejercicio 1', function() {

    describe('#div', function() {

        it('divide dos numeros', function() {
            assert.equal(div(4, 2), 2)
        })

    })

    describe('#concat', function () {

        it('concatena dos strings', function () {
            assert.equal(concat("hola", "mundo"), "holamundo")
        })

        it('concatena un strings con el string vacio', function () {
            assert.equal(concat("hola", ""), "hola")
        })

    })

    describe('#max', function () {

        it('duelve el mayor cuando está en primer lugar', function () {
            assert.equal(max(2, 1), 2)
        })

        it('duelve el mayor cuando está en segundo lugar', function () {
            assert.equal(max(1, 2), 2)
        })

        it('duelve cualquiera cuando son iguales', function () {
            assert.equal(max(1, 1), 1)
        })

    })

})