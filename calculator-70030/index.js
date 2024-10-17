const sumar = (n1,n2)=>Number(n1)+Number(n2)
const restar = (n1,n2)=>n1-n2
const multiplicar = (n1,n2)=>n1*n2
const dividir = (n1,n2)=>n1/n2

export { sumar, restar, multiplicar, dividir }
// para habilitar la desestructuracion de cada uno de los metodos
export default { sumar, restar, multiplicar, dividir }
// poara habilitar la importacion completa del modulo (de las funcionalidades)