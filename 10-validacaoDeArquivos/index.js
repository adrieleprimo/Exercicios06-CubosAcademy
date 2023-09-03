const nomeArquivo = 'Foto da Familia.pdf';
const indexPNG = nomeArquivo.indexOf("pdf")
function arquivo(nomeArquivo){
    if(indexPNG != -1){
        console.log("Arquivo inválido")
    } else {
        console.log("Arquivo válido")
    }
}
arquivo(nomeArquivo)