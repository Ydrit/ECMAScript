//Encuentra el primer elemento y lo reemplaza
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
//Remplaza todos los elementos
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

class Message {
    #show(val){ //Agregando al principio '#' de show vuelve el mensaje privado
        console.log(val);
    };
    get #add(val){
        ...
    }
}

const message = new Message();
message.show('Hola!');
//Objeto global de promise, Array de promesas, Capturando la primera que se resuelva
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

//Mantener referencia debil a otro objeto sin evitar que este sea pasado o recogido por el Garbage Collector
class anyClass {
    constructor(element) {
    this.ref = new WeakRef(element)
    }
    {...}
}

//Ayuda a trabajr con elementos de expresiones y operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);
