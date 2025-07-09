function esPrimo(numero) {
    if (numero <= 1) { return false }
    for (let index = 2; index < numero; index++) {
        if (numero % index === 0) return false
    }
    return true
}
const esPrimo2 = n => n > 1 && [...Array(n - 2)].every((_, i) => n % (i + 2) !== 0);
const esPrimo3 = n =>
    n > 1 &&
    Array.from({ length: n - 2 }, (_, i) => i + 2)
        .every(divisor => n % divisor !== 0);

for (let index = 1; index < 100; index++) {
    esPrimo3(index) && console.log(index)
}

const ordenarPrimos = (arr) => {
    return arr.filter((num) => esPrimo(num)).sort((a, b) => b - a)
}
console.log("ordenarPrimos: ", ordenarPrimos([123, 23, 33, 4, 3, 5, 7, 11, 10, 99]))

function getDivisores(numero) {
    const resp = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) resp.push(i);
    }
    return resp;
}
console.log(getDivisores(30))

const divisores2 = (num) => {
    return [...Array(num).keys()].map((value) => value + 1).filter((i) => { return num % i === 0 })
}
console.log(divisores2(30))


/* Enunciado:

Dado un número entero n, debes:
    1.	Obtener todos los divisores positivos de n (incluyendo 1 y n).
    2.	Filtrar solo los divisores que sean números primos.
    3.	Retornar esos divisores primos ordenados de menor a mayor.
 */

const divisores = getDivisores(234698789345)
console.log('🚀 ~ divisores:', divisores);
const divisoresPrimos = divisores.filter((value) => esPrimo(value))
console.log('🚀 ~ divisoresPrimos:', divisoresPrimos);
const divisoresPrimosOrdenados = divisoresPrimos.sort((a, b) => b - a)
console.log('🚀 ~ divisoresPrimosOrdenados:', divisoresPrimosOrdenados);

