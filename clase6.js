var kristian = {
    nombre: 'Kristian',
    apellido: 'Lopez',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(kristian)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre: 'Pepito'})
imprimirNombreEnMayusculas({apellido: 'Gomez'})