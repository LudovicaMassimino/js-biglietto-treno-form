console.log('form-biglietto del treno')

// bonus: sostituite l’input dell’età con una select che permetta all’utente di selezionare una opzione per lo sconto scegliendo tra:   
// - nessuno
// - < 18 anni 
// - > 65 anni 



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

// form
const formElement = document.getElementById('ticket-form');
const scontoList = document.getElementById ('lista-sconto');

// abilitare ascolto evento
formElement.addEventListener ('submit', function (event) {
    // impedire che il form venga effettivamente inviato e la pagina si ricarichi
    event.preventDefault();

    // prendere l'opzione selezionata dal dr menu
    const selectedValue = scontoList.value;

    // km
    const km = parseFloat(kmInputElement.value) ; // number
    console.log('I km che vuoi percorrere: ' + km + ' km')

    // validare i dati
    // km > 0
    console.log (km > 0)
    // km non è NaN
    console. log (!isNaN(km) )

    // selectedValue != "0"
    console.log(selectedValue != '0')

    //SE i dati sono validi
    // if (km > 0 && !isNaN (km)) {
        // totale provvisorio
        const totaleProvvisorio = (0.21 * km); //number
        console.log ('Totale provvisorio: ' + totaleProvvisorio + ' euro') 

        // condizioni per lo sconto: SE <18 20%, SE >65 40%
    
        if (selectedValue === '1') {
            sconto = 0.2;
            shownSconto = 20;
        } else if (selectedValue === '2') {
            sconto = 0.4;
            shownSconto = 40;
        } else {
            sconto = 0;
            shownSconto = 0;
        }

        // calcolare il totale applicando lo sconto, se possibile
        const price = totaleProvvisorio - totaleProvvisorio * sconto;
        console.log (price.toFixed(2))
    
    
    // stampare le info nella viewport
    const kmElement = document.getElementById ('km che vuoi percorrere')
    kmElement.innerHTML = km + ' km'
    
    const totaleProvvisorioElement = document.getElementId ('Totale provvisorio: ') 
    totaleProvvisorioElement.innerHTML = totaleProvvisorio.toFixed(2) + '&euro;'

    const scontoElement = document.getElementById('sconto')
    scontoElement.innerHTML = shownSconto + '%'

    // stampare il prezzo nella viewport
    const priceElement = document.getElementById('price')
    console.log(priceElement)
    priceElement.innerHTML = price.toFixed(2) +  ' &euro;'

})})