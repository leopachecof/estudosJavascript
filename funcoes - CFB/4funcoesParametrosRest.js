console.log("---Funções com Parâmetro Rest--- com FOR")
function soma (...valores){
    let tam=valores.length
    let res=0
    for(let i=0; i<tam; i++){
        res+=valores[i]
    }
    return res
}

console.log(soma(10,5,6,9))

console.log("---Agora com FOR OF---")

function soma (...valores2){ 
    let res2=0
    for(let v of valores2){
        res2+=v
    }
    return res2
}

console.log(soma(10,5,6,9))