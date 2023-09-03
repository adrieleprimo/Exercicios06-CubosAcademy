const cpf = "011.022.033-44";
let CPF = cpf;
function replace(original, textUm, textDois,textTres, newText){
    while (original !== original.replace(textUm, newText) ){  
            original = original.replace(textUm, newText)
            original = original.replace(textDois, newText)
            original = original.replace(textTres, newText)
    }       
    return original
}
console.log(replace(CPF, '.', '-', "/", ""))