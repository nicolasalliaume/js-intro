/*-----------------------------------------------
 Tests Ejercicio 5 - Offline.

 Correr `npm run test ejercicios/offline/5/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/

const { postsByPopularity, postsByEngagement } = require('./e5.js')
const assert = require('assert');

describe('#ejercicio offline 5', function () {
    
    const userWithoutPosts = { 
        username: 'emptyuser',
        postCount: 0,
        posts: []
    }

    const userWithPosts = { 
        username: 'popularuser',
        postCount: 0,
        posts: [
            {
                ID: 1,
                date: 'xxxx-xx-xx',
                time: 'xx:xx',
                caption: 'Lorem ipsum',
                likeCount: 100,
                commentCount: 10
            },
            {
                ID: 2,
                date: 'xxxx-xx-xx',
                time: 'xx:xx',
                caption: 'Lorem ipsum',
                likeCount: 120,
                commentCount: 11
            },
            {
                ID: 3,
                date: 'xxxx-xx-xx',
                time: 'xx:xx',
                caption: 'Lorem ipsum',
                likeCount: 200,
                commentCount: 5
            },
        ] 
    }

    describe('#postsByPopularity', function () {

        it('retorna vacío si no hay posts', function() {
            assert.deepEqual(postsByPopularity(userWithoutPosts), [])
        })

        it('retorna ids de posts en orden descendente de likes', function () {
            assert.deepEqual(postsByPopularity(userWithPosts), [3, 2, 1])
        })

    })

    describe('#postsByEngagement', function () {

        it('retorna vacío si no hay posts', function () {
            assert.deepEqual(postsByEngagement(userWithoutPosts), [])
        })

        it('retorna ids de posts en orden descendente de cantidad de comentarios', function () {
            assert.deepEqual(postsByEngagement(userWithPosts), [2, 1, 3])
        })

    })
})