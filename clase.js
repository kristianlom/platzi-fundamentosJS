const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
        .get(url, opts, callback)
        .fail( () => {
            console.log(`Sucesió un error. No se pudo obtener el personaje ${id}`)
        })
}

obtenerPersonaje(1, function (person) {
    console.log(`Hola, yo soy ${person.name}`)

    obtenerPersonaje(2, function (person) {
        console.log(`Hola, yo soy ${person.name}`)

        obtenerPersonaje(3, function (person) {
            console.log(`Hola, yo soy ${person.name}`)

            obtenerPersonaje(4, function (person) {
                console.log(`Hola, yo soy ${person.name}`)

                obtenerPersonaje(5, function (person) {
                    console.log(`Hola, yo soy ${person.name}`)
                })

            })
        })
    })
})
