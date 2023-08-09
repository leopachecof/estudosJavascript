
//Declaração da função
function nome() {                
    console.log("Leonardo")
}
//Chamada da função
nome()     

function somaNum() {
    let n1=5
    let n2=10
    let soma=n1+n2
    console.log(soma)
}
//Contador com o Loop
for(let i=0; i < 5; i++) {
somaNum()
}

//Mudando no Navegador
//busca o elemento de lá --> document.getElementById
function mudarTexto() {
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")

//leva novo elemebto pra lá --> variavél.innerHTML
    d1.innerHTML="Família Lageco"
    d2.innerHTML="Família Lageco"
    d3.innerHTML="Família Lageco"
}

function voltar(){
    window.location.reload()
}