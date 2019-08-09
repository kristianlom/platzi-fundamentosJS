var kristian = {
    nombre: 'Kristian',
    apellido: 'Lopez',
    edad: 8,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if (persona.cocinero) {
        console.log('Cocinero')
    }
    if (persona.cantante) {
        console.log('Cantante')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }
    if (persona.drone) {
        console.log('Piloto de Drone')
    }
}

imprimirProfesiones(kristian)

//Reto:
function imprimirSiEsMayorDeEdad(persona) {
    //Kristian es mayor de edad
    //Kristian es menor de edad
    console.log(`${persona.nombre} es ${(persona.edad > 17) ? "mayor" : "menor"} de edad`)
}

imprimirSiEsMayorDeEdad(kristian)