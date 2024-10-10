// desarrollaremos una funcion que sume numeros en base a pruebas
const suma = (...numbers) => {
    //para que las pruebas test1 test2 test3 y test4 empiecen a PASAR
    //tengo que continuar desarrollando la funcionalidad
    if (numbers.length === 0) {
        return 0
    }
    const some = numbers.some(num => typeof num !== "number")
    if (some) {
        return null
    }
    return numbers.reduce((acc, val) => acc + val)
}

let contadorPruebas = 0
let contadorPruebasOk = 0
// TEST 1: devuelve null si algún parámetro NO es numerico
function test1() {
    contadorPruebas++
    const resultado = suma("hola", "chau")
    if (resultado === null) {
        contadorPruebasOk++
    } else {
        console.log("LA PRUEBA 1 NO PASÓ (devuelve null si algún parámetro NO es numerico)");
    }
}
test1()

// TEST 2: devuelve 0 si no recibe argumentos
function test2() {
    contadorPruebas++
    const resultado = suma()
    if (resultado === 0) {
        contadorPruebasOk++
    } else {
        console.log("LA PRUEBA 2 NO PASÓ (devuelve 0 si no recibe argumentos)");
    }
}
test2()

// TEST 3: devuelve correctamente la suma de dos numeros
function test3() {
    contadorPruebas++
    const resultado = suma(20, 5)
    //asi como hardcodeo datos de prueba
    //debo hardcodear datos de resultado
    if (resultado === 25) {
        contadorPruebasOk++
    } else {
        console.log("LA PRUEBA 3 NO PASÓ (devuelve correctamente la suma de dos numeros)");
    }
}
test3()

// TEST 4: devuelve correctamente la suma de cualquier cantidad de numeros
function test4() {
    contadorPruebas++
    const resultado = suma(10, 10, 10, 10, 10)
    if (resultado === 50) {
        contadorPruebasOk++
    } else {
        console.log("LA PRUEBA 4 NO PASÓ (devuelve correctamente la suma de cualquier cantidad de numeros)");
    }
}
test4()

console.log({ contadorPruebas, contadorPruebasOk });
