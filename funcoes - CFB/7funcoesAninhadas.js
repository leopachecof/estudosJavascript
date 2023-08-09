// funções aninhadas, são funções dentro de outras funções

// const som=()=>{}
const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(15,2,8))

// ela pode estar do lado de fora, uma função chamando outra:


const somar2=val2=>{
    let res2=0
    for(v2 of val2){
        res2+=v2
    }
    return res2
}

const soma2=(...valores2)=>{//recebe 15,2,8
    return somar2(valores2)// chamando a função da linha 20 e recebendo os parametros da linha 32// e return daqui recebe a resposta final
}
    
console.log(soma2(15,2,8))