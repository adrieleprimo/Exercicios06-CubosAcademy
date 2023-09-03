const cpf = "12345678900";
const cnpj = "12345678000199";

if(cpf.length === 11 && cnpj.length === 14){
    console.log(`${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`)
    console.log(`${cnpj[0]}${cnpj[1]}.${cnpj[2]}${cnpj[3]}${cnpj[4]}.${cnpj[5]}${cnpj[6]}${cnpj[7]}/${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}-${cnpj[12]}${cnpj[13]}`)
}else if (cpf.length === 11 && cnpj.length != 14){
    console.log(`${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`)
    console.log("CNPJ não é valido");
}else if(cpf.length != 11 && cnpj.length === 14 ){
    console.log(`${cnpj[0]}${cnpj[1]}.${cnpj[2]}${cnpj[3]}${cnpj[4]}.${cnpj[5]}${cnpj[6]}${cnpj[7]}/${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}-${cnpj[12]}${cnpj[13]}`)
    console.log("CPF Inválido")
} else {
    console.log("CPF Inválido");
    console.log("CNPJ não é valido");
}