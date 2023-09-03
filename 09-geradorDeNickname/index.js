const nome = 'Guido Cerqueira';
let nomeFormatado = nome;
for(let i =0; i<nome.length; i++){
    if(nomeFormatado.length > 13){
        nomeFormatado = nomeFormatado.slice(0, -1)
        
    }
}
console.log(nomeFormatado.replace(" ", "").toLowerCase().padStart(13, "@"))