// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let arrayToRevert = ["hi","this","is","my name"]

let reverter = arrayToRevert.reverse()

console.log(reverter + " ex1")

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const arrayBigger=[7,5,2,22,6668,41,1,42,3]


console.log(Math.max(...arrayBigger) + " ex 2")


/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...arrayBigger) + " ex 3")

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenNumbers=[]

for(let i =0;i<arrayBigger.length;i++){
    
    if( arrayBigger[i] % 2 == 0){
        evenNumbers.push(arrayBigger[i])
    }

}

console.log(evenNumbers,"ex 4")

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/
const evenRemoverFunc= function(){
for(let i =0;i<arrayBigger.length;i++){
    let looped
    
    if( arrayBigger[i] % 2 == 0){
         arrayBigger[i].splice(i,1)
    }

}}

console.log(arrayBigger,"ex 5")

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

const longString= "Valor devuelto Un array que contiene los elementos eliminados. Si sólo se ha eliminado un elemento, devuelve un array con un solo elemento. Si no se ha eliminado ningún elemento, devuelve un array vacío.Descripción Si especifica un número diferente de elementos a agregar que los que se eliminarán, el array tendrá un tamaño diferente al original una vez finalizada la llamada."

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
