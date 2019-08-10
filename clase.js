function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = 20
}
const PERSONA_ALTA = 1.8

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`${this.nombre} es una persona Alta`)
    }
}

var kristian = new Persona('Kristian','Lopez', 1.7)
var david = new Persona('David','Lopez', .9)
var goliat = new Persona('Goliat', 'Desconocido', 3)

kristian.saludar()
david.saludar()
goliat.saludar()

kristian.soyAlto()
david.soyAlto()
goliat.soyAlto()
