class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        if (this.altura > 1.5) {
            console.log(`${this.nombre} es una persona Alta`)
        }
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }

}

var kristian = new Persona('Kristian', 'Lopez', 1.7)
var desarrollador = new Desarrollador('Kris', 'Lopez Montes', 1.74)
// var david = new Persona('David', 'Lopez', .9)
// var goliat = new Persona('Goliat', 'Desconocido', 3)

kristian.saludar()
kristian.soyAlto()
desarrollador.saludar()
