const texto = "Aprenda programar do zero na Cubos Academy";

function url(texto){
    for(let i =0; i<texto.length;i++){
        texto = texto.replace(" ", "-")
    }
    return texto.toLowerCase();
}
const novaUrl = url(texto);
console.log(novaUrl)
