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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var {nombre} = persona

    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(kristian)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})
//imprimirNombreEnMayusculas({apellido: 'Gomez'})

function imprimirNombreYEdad(persona) {
    //Reto:
    //Hola, me llamo Kristian y tengo 28 años
    var {nombre, apellido, edad} = persona

    console.log(`Hola. me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreYEdad(kristian)
imprimirNombreYEdad(dario)