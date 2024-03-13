console.log('form-biglietto del treno')


const buttonElement = document.getElementById('submit')
console.log(buttonElement)

const kmInputElement = document.getElementById('km')
console.log(kmInputElement)

const ageInputElement = document.getElementById('age')
console.log(ageInputElement)


//ascolto del click sul button
buttonElement.addEventListener('click', function () {
    console.log('click sul button')

const km = parseFloat(kmInputElement.value) ; // number
console.log('I km che vuoi percorrere: ' + km)

const age = parseFloat(ageInputElement.value) ; // number
console.log ('La tua età: ' + age)

// totale provvisorio
const prezzoProvvisorio = (0.21 * km); //number
    console.log ('Totale provvisorio: ' + prezzoProvvisorio + ' euro')  

// condizioni per lo sconto: SE <18 20%, SE >65 40%
    let sconto = 0 // number
    if (age < 18) {
        sconto = 0.2
        console.log ('Puoi usufruire dello sconto del 20%')
    } else if (age > 65) {
        sconto = 0.4
        console.log ('Puoi usufruire dello sconto del 40%')
    } else {
        console.log ('Non puoi usufruire dello sconto')
    }

    const price = (prezzoProvvisorio - prezzoProvvisorio * sconto);
    console.log (price.toFixed(2))
    
    const priceElement = document.getElementById('price')
    console.log(priceElement)
    priceElement.innerHTML = price.toFixed(2) +  ' &euro;'

})
