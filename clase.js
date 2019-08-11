const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

aBuscar = prompt('Numero de algun personaje de Star Wars')

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', aBuscar)}`
const opts = {crossDomain: true}

const onPeopleResponse = function (person) {
    console.log(`Hola yo soy, ${person.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)
    .fail(function () {
        console.log('El personaje NO EXISTE!!!')
    })
