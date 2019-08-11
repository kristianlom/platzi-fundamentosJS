const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

const onPeopleResponse = function (person) {

    console.log(`${person.url.substr(person.url.length - 3, 2)} , soy ${person.name}`)
    // console.log(`Hola -${person.id}-, yo soy ${person.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, onPeopleResponse)
        .fail(function () {
            console.log('El personaje NO EXISTE!!!')
        })

}

for (var i = 1; i < 100; i++) {
    console.log(i)
    obtenerPersonaje(i)
}
