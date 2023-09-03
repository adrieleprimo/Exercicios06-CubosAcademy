const numeroCartao = '1111222233334444';
let primeirosDigitos = numeroCartao.slice(0, 4);
let ultimosDigitos = numeroCartao.slice(-4)
console.log(primeirosDigitos)
console.log(ultimosDigitos)
let numeroFormatado = primeirosDigitos.padEnd(12, "****")
console.log(numeroFormatado +ultimosDigitos);