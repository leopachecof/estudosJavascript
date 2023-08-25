// Exercício de Revisão Geral
//

let spaceshipName = prompt("Digite o nome da Nave:")
let proibirChar = prompt("Digite o caracter proibido:")
let invertName = ""

for(let i = spaceshipName.length - 1; i >=0; i--){
    if(spaceshipName[i] == proibirChar){
        break
    } 
    invertName += spaceshipName[i]  
}
alert("Nome original da nave: " + spaceshipName + "\nNome após ocutação é " + invertName)

