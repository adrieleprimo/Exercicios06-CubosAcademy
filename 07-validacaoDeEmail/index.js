const email = "jose.messias@.";
const primeiroIndex = email.indexOf(".");
const ultimoIndex = email.lastIndexOf(".");
if(email.includes("@") && email.includes(".") && primeiroIndex != 0 && ultimoIndex != email.length-1){
    console.log("E-mail válido")
} else {
    console.log("E-mail inválido")
}