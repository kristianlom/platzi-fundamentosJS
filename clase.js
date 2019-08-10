class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)
        }
    }

    soyAlto() {
        var {nombre, altura} = this
        if (altura > 1.5) {
            console.log(`${nombre} es una persona Alta`)
        }
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var {nombre,apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabía que eras desarrollador(a)`)
    }
}

var kristian = new Persona('Kristian', 'Lopez', 1.7)
var david = new Persona('David', 'Lopez', .9)
var goliat = new Persona('Goliat', 'Desconocido', 3)
var desarrollador = new Desarrollador('Kris', 'Lopez Montes', 1.74)

kristian.saludar()
david.saludar(responderSaludo)
goliat.saludar(responderSaludo)
desarrollador.saludar(responderSaludo)
