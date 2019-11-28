/*-----------------------------------------------
 Ejercicio 5 - Offline.
 -------------------

 🔶 Desafío: Dada la siguiente estructura de objetos que representan posts
    de Instagram:

        // objeto User
        { 
            username: 'kimkadashian', 
            postCount: 679, 
            posts: [
                {
                    ID: 120120391098,
                    date: '2019-12-01',
                    time: '23:46',
                    caption: 'Trying out the latest collection from @thekit',
                    likeCount: 3156788,
                    commentCount: 2337
                },
                ...
            ] 
        }

    Escribir:
        - una función `postsByPopularity()` que dado un objeto User retorne 
            un array de IDs de posts ordenados por cantidad likes
        
        - una función `postsByEngagement()` que dado un objeto User retorne
            un array de IDs de posts ordenados por cantidad de comentarios


 🧪 Test:
 Correr `npm run test ejercicios/offline/5/test.js` desde dentro del repo.

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
module.exports = { postsByPopularity, postsByEngagement }