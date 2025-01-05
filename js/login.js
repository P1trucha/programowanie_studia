// Skrypt 2.3 - login.js

// Funkcja wywoływana w momencie wysyłania formularza.
// Funkcja sprawdza dane formularza i zwraca wartość logiczną.
function validateForm() {
    'use strict';

    // Pobierz referencje do pól formularza:
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // Walidacja!
    if ( (email.value.length > 0) && (password.value.length > 0) ) {
        return true;
    } else {
        alert('Proszę uzupełnić formularz!');
        return false;
    }

} // Koniec funkcji validateForm().

// Funkcja wykonywana po zakończeniu wczytywania strony WWW.
// Funkcja dodaje procedurę obsługi zdarzenia do formularza.
function init() {
    'use strict';

    // Potwierdź, że można użyć document.getElementById():
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }

} // Koniec funkcji init().

// Przypisz procedurę obsługi zdarzenia do okna przeglądarki:
window.onload = init;