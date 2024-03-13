console.log('form-biglietto del treno')



//per prendere le info dagli input di km e age
const kmInputElement = document.getElementById('km')
console.log(kmInputElement)

const ageInputElement = document.getElementById('age')
console.log(ageInputElement)

//button
const buttonElement = document.getElementById('submit')
console.log(buttonElement)

//ascolto del click sul button
buttonElement.addEventListener('click', function () {
    console.log('click sul button')

// km che vuoi percorrere
const km = parseFloat(kmInputElement.value) ; // number
console.log('I km che vuoi percorrere: ' + km + ' km')

// la tua età
const age = parseFloat(ageInputElement.value) ; // number
console.log ('La tua età: ' + age + ' anni')

// totale provvisorio
const totaleProvvisorio = (0.21 * km); //number
    console.log ('Totale provvisorio: ' + totaleProvvisorio + ' euro')  

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

    const price = totaleProvvisorio - totaleProvvisorio * sconto;
    console.log ('Il tuo biglietto costerà: ' + price.toFixed(2) + ' euro')
    
    // stampare il prezzo nella viewport
    const priceElement = document.getElementById('price')
    console.log(priceElement)
    priceElement.innerHTML = price.toFixed(2) +  ' &euro;'

})