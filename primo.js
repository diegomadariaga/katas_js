function esPrimo(numero) {
    if (numero <= 1) { return false }
    for (let index = 2; index < numero; index++) {
        if (numero % index === 0) return false
    }
    return true
}
for (let index = 1; index < 100; index++) {
    esPrimo(index) && console.log(index)
}

const esPrimo2 = n => n > 1 && [...Array(n - 2)].every((_, i) => n % (i + 2) !== 0);


function divisores(numero) {
    const resp = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) resp.push(i);
    }
    return resp;
}
console.log(divisores(30))

const divisores2 = (num) => {
    return [...Array(num).keys()].map((value) => value + 1).filter((i) => { return num % i === 0 })
}
console.log(divisores2(30))