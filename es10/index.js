//Permite elegir la profundidad del array
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));
//Modifica el valor de los arrays
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));
//Permite remover espacios
let hello = '         Hello World';

console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World         ';

console.log(hello);
console.log(hello.trimEnd());
//Permite remover el (error) de catch
try {

} catch {
    error
}
//Tranforma clave valor en un objeto
let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries))
//Objeto de tipo symbolo que permite acceder a una descripcion
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);