const obj = {
    name: 'Manuel',
    age: 32,
    country: 'Mx'
};

let { name, ...all } = obj;
console.log(name, all);

// Next

const obj = {
    name: 'Manuel',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);

// Next

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

//Next

const regexData = /([0-9{4}])-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
