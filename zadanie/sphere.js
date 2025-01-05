// Skrypt 4.5 - sphere.js
// Skrypt oblicza objętość figury.

function calculate(event) {
    'use strict';
   
    // Tworzenie obiektu

    class SummaryArray  {
 
	constructor(){
	this.summary = summary = [];	
	this.figure = figure;
    return summary.push(figure)
	}
	 }

    var summary = [];

    // Pobierz referencję do wartości formularza
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var h = parseFloat(document.getElementById('h').value);

    // Pobierz nazwę figury z rozwijanego menu
    var figure = document.getElementById('summary').value; // Identyfikator selecta: 'summary'

    // Oblicz objętość (prostopadłościanu)
    var volume = a * b * h;

    // Zmień format wartości
    volume = volume.toFixed(2);

    // Dodaj do tablicy summary nazwę figury
    summary.push(figure);

    console.log(summary);

    // Wyświetl wyliczoną objętość
    document.getElementById('volume').innerHTML = "Objętość: " + volume;
    
    // Wyświetl zawartość tablicy summary
    document.getElementById('sumaryarray').innerHTML = "Dział: " + summary.join(', ');

    console.log(`Twój wynik to:`, volume);

    // Zatrzymaj wysyłanie formularza (niech skrypt tylko obliczy wynik)
    event.preventDefault();
    console.log(summary)
}

// Inicjalizacja formularza
function init() {
    'use strict';
    // Przypisz funkcję calculate do zdarzenia onsubmit formularza
    document.getElementById('theForm').onsubmit = calculate;
}

// Kiedy strona się załaduje, uruchamiamy init
window.onload = init;
