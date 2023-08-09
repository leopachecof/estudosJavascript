let n=0

while(n<10){
    console.log(n)
    n++
}
console.log("---EXEMPLO FATORIAL---")
//5! = 5*4*3*2*1= 120

let n2=5
let fat=1

while(n2>=1){
    fat*=n2
    n2--
}
console.log(fat)

// Curso Full Stack Javascript em 8 semanas Leonardo Scorza
// Usando o contador numérico

console.log("---WHILE---")
let velocity = 50
let acceleration = 5

while (velocity <= 100) {
    console.log("Acelerando: Estamos a " + velocity + "km/s")
    velocity += acceleration // velocity = velocity + acceleration
}

// Usando o contador com o tamanho dos caracteres

let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length

while(pos < constellationLength) {
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos)
    }
    pos += 1
}