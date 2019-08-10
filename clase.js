var signo = prompt('Mensaje')


switch (signo) {
    case 'acuario':
    case 'Acuario':
        console.log('Switch Acuario');
        break
    case 'piscis':
        console.log('Switch Piscis');
        break
    case 'cancer':
        console.log('Switch Cancer');
        break
    case 'capricornio':
        console.log('Switch Capricornio');
        break
    default:
        console.log('No existe el signo indicado')
}
if (signo === 'acuario') {
    console.log('Es Acuario')
}
if (signo === 'piscis') {
    console.log('Es Piscis')
}
if (signo === 'cancer') {
    console.log('Es Cancer')
}
