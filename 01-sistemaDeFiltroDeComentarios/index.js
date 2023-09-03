const comentario = "Esse COVID é muito perigoso!";
if(comentario.indexOf("COVID") != -1 || comentario.indexOf("covid") != -1 || comentario.indexOf("PANDEMIA") != -1 || comentario.indexOf("pandemia") != -1){
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log(comentario)
}