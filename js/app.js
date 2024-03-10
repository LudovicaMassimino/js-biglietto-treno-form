console.log('form-biglietto del treno')


const buttonElement = document.getElementById('submit')
console.log(buttonElement)

const kmInputElement = document.getElementById('km')
console.log(kmInputElement)

const ageInputElement = document.getElementById('age')
console.log(ageInputElement)

const resultElement = document.getElementById('result')


buttonElement.addEventListener('click', function () {
    console.log('click sul button')

    const km = parseInt(kmInputElement) ; // number
	console.log('numero di km che vuoi percorrere ' + km)

    const age = parseInt(ageInputElement) ; // number
    console.log ('La tua età: ' + age + ' anni' )

	// totale provvisorio
    const prezzoProvvisorio = (0.21 * km); //number
    console.log ('Totale provvisorio: ' + prezzoProvvisorio + ' euro')  

    // condizioni per lo sconto: SE <18 20%, SE >65 40%
    let sconto = 0 // number
    if (age < 18) {
        sconto = 0.2
    } else if (age > 65) {
        sconto = 0.4
    } else {
        console.log ('Non puoi usufruire dello sconto')
    }

    const price = (prezzoProvvisorio - prezzoProvvisorio * sconto);
    console.log ('Totale: ' + price + ' euro')
    
    resultElement.innerHTML = 'Prezzo del biglietto: ' + price + ' &euro;'

})
