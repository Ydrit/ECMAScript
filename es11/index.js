const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});
//Numeros grandes
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);
//Promesas
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => reject("resolve"));
const promise3 = new Promise((resolve,reject) => reject("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
//Access globalThis
console.log(window);
console.log(globalThis);
//En caso null presenta mensaje, en caso no null provee mensaje - Operador de Null
const fooo = null ?? 'default string';
console.log(fooo);

const fooo = 'asd' ?? 'default string';
console.log(fooo);

//Trabajar diferentes niveles de recursos
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
 } else {
        console.log('fail');
}