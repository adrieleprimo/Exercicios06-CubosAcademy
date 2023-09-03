const celular = 7299918888;
let numero = celular.toString();
if(numero.length=== 10){
let primeirosDigitos = numero.slice(0, 2)
let metade = numero.slice(2, 6);
let restante = numero.slice(-4);
let numero9 = primeirosDigitos.padEnd(6, ") 9 ").padStart(7, "(")
console.log(numero9 + metade +"-"+ restante)
} else {
    let metade = numero.slice(0, 4);
    let restante = numero.slice(-4);
    let numeroFormatado = metade+ "-" + restante
    let numero9 = numeroFormatado.padStart(11, "9 ")
    console.log(numero9)
}