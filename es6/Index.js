function newFunction(name, age, country){
    var name = name || 'Manuel';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Manuel', age = 32, country = 'MX'){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

// Template Literals
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n'
+ 'Otra frase epica que necesitamos.'

//es6
let lorem2 = `Otra frase epica que necesitamos.
Ahora es otra frase epica.`;

console.log(lorem);
console.log(lorem2);

//next

let person = {
    'name': 'Manuel',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

//es6
//let{name, age, country} = person;
console.log(name, age, country);

//next

let team1 = ['Manuel', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//next

{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); //Solo accesible de esta manera ya que no entra en el scope global
}

console.log(globalVar);

//next
//No permitible
//const a = 'b';
//a = 'a';
//console.log(a);

//Permitible
var a = 'b';
a = 'a';
console.log(a);

// Arrow Functions, Promesas y Parámetros en objetos

let name = 'Manuel';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = {name, age};
console.log(obj2);

//next

const names = [
    {name: 'Manuel', age: 32},
    {name: "Jessica", age: 27}
]

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

//const listOfNames3 = (name, age, country) => {
//    ...
//}

//const listOfNames4 = name => {
//    ...
//}

const square = num => num * num;

//next Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('All Good');
        } else{
            reject('Something went wrong');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then (() => console.log('hola'))
    .catch(error => console.log(error));

// Clases, Módulos y Generadores

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//next import & export

import { hello } from './module';

hello();

//next generators

function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);