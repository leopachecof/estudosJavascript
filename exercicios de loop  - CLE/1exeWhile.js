//Estudo While no console
console.log("-------FUNÇÃO WHILE------")
console.log("-------exemplo 1------")
let velocity = 50
let acceleration = 5

while(velocity <= 100){ //contador simples
    console.log(`Acelerando a ${velocity} km/s`)
    velocity +=acceleration // velocity = velocity + acceleration
}

console.log("-------exemplo 2------")
let constellation = "Andromeda"
let pos = 0 //posição
let constellationLength = constellation.length

while(pos < constellationLength){ //contador string
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos)
    }
    pos += 1
}

console.log("-------FUNÇÃO WHILE------")