const data = {
    frontend: 'Manuel',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Manuel',
    backend: 'Isabel',
    design: 'Ana', 
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12, ' -----'));
console.log('Food'.padEnd(12, ' -----'));

const obj = {
    name: 'Manuel', //La coma establece que puede haber algo a continuacion
}

// Async Await

const  helloWorld = () => {
    return new Promise((resolve, reject) => {
         (true) //Cambiando a False podemos visualizar el error
         ? setTimeout(() => resolve('Hello World'), 3000)
         : reject(new Error('Test Error'));
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
try {
    const hello = await helloWorld();
    console.log(hello);
} catch (error) {
    console.log(error);
}
};

anotherFunction();