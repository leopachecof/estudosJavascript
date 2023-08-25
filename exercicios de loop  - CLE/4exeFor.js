// EXERCÍCIO FORcARALHO

let spaceship = prompt("Digite o nome da nave:")
let charToReplace = prompt("Qual caracter vc deseja substituir?")
let replacementChar = prompt("Por qual caracter vc deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] == charToReplace){
        newSpaceship += replacementChar;
    } else {
        newSpaceship += spaceship[pos]
    }
}
console.log(newSpaceship)
