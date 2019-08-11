const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts,
        function (person) {
            console.log(`${person.url.substr(person.url.length - 3, 2)} , soy ${person.name}`)
            // console.log(`Hola -${person.id}-, yo soy ${person.name}`)
        })
    if (callback) {
        callback()
    }

}

    obtenerPersonaje(1, () => {
        obtenerPersonaje(2, function () {
        })
    })
