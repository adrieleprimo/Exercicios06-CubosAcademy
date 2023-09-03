let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

if(identificador.length != 6){
    console.log(identificador.padStart(6, "0"))
}

let array = nome.split(" ")
let nomeNovo = "";
for(let item of array){
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeNovo += primeiraLetra.toUpperCase() + restanteDoNome + " " ;
}

console.log(nomeNovo);
console.log(email.trim())