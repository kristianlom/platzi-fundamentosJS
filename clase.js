var kristian = {
    nombre: 'Kristian',
    apellido: 'Lopez',
    edad: 28,
    peso: 75
}
console.log(`Al inicio del año ${kristian.nombre} pesa ${kristian.peso} kg `)

const DIAS_DEL_ANO = 365
const INCREMENTO_PESO = 0.200

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(kristian)
    } else if (random < 0.50) {
        adelgazarDePeso(kristian)
    }
}

console.log(`Al final del año ${kristian.nombre} pesa ${kristian.peso.toFixed(1)} kg `)