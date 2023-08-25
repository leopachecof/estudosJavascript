// Estudo Do While
// Executa 1º e verifica a condição somente no final

let velocity = 110
let acceleration = 5

do {
    console.log("Acelerando: Estamos a " + velocity + "km/s")
    velocity += acceleration
} while (velocity <= 100)