/*-----------------------------------------------
 Ejercicio 3.
 -------------------

 Este código es dado, y el ejercicio consiste en escribir los
 tests que prueban que este código funciona correctamente.

 🧪 Test:
 Correr `npm run test ejercicios/live/3/test.js` desde dentro del repo.

 - · - · - · - · - · - · - · - · - · - · - · - ·
 Youtube Live Session
 Introducción a Javascript. Desde cero.

 Creado por [Nico Alliaume](https://github.com/nicolasalliaume)
 -----------------------------------------------*/


 // lengths: Retorna un array con el largo de cada cadena en el 
 // array parámetro.
 // lenghts :: [ String ] -> [ Number ]
 const lengths = xs => xs.map(x => x.length)


// merge: Retorna un objeto como resultado de concatenar cada una
// de las propiedades de dos objetos dados.Asumimos que ambos 
// objetos tienen las mismas propiedades.
// merge :: Object -> Object -> Object
const merge = (o1, o2) => {
    const result = {}
    for (const k in o1) {
        result[k] = o1[k] + o2[k]
    }
    return result
}



module.exports = {
    lengths,
    merge,
}