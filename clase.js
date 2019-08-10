function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {
    }
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
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

heredaDe(Desarrollador,Persona)

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

var kristian = new Persona('Kristian', 'Lopez', 1.7)
var desarrollador = new Desarrollador('Kris','Lopez Montes',1.74)
// var david = new Persona('David', 'Lopez', .9)
// var goliat = new Persona('Goliat', 'Desconocido', 3)

kristian.saludar()
desarrollador.saludar()
