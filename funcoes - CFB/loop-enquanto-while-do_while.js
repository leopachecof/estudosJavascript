//diferença do while para o Do While
//  While - primeiro faz o teste lógico
//  Do While   primeiro roda pra depois fazer o teste lógico


//while - o 1 teste lógico já dá como falso então ele só exibe uma vez o programa
console.log("---WHILE---")
let n=8

while(n<10){
    console.log("CFB Cursos")
    n++
}
console.log("Fim do programa")

console.log("---DO WHILE---")

// Do while - o 1 teste lógico já dá como falso então ele só exibe uma vez o programa
let n2=6

do{
    console.log("CFB Cursos")
    n2++
}while(n2<10)
console.log("Fim do programa")

