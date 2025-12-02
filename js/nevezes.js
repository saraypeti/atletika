const form = document.getElementById('registrationForm');

function showError(inputElement, errorId, message) {
    const errorSpan = document.getElementById(errorId);
    inputElement.classList.add('invalid'); 
    errorSpan.textContent = message;
    errorSpan.style.display = 'block'; 
}

// Hiba el
function clearError(inputElement, errorId) {
    const errorSpan = document.getElementById(errorId);
    inputElement.classList.remove('invalid');
    errorSpan.style.display = 'none'; 
}


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonRegex = /^(\+36|06)[\s-]?(\d{1,2})[\s-]?(\d{3})[\s-]?(\d{3,4})$/;

// Elküldés
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let isValid = true; 

    const nev = document.getElementById('nev');
    const email = document.getElementById('email');
    const telefon = document.getElementById('telefon');
    const szulDatum = document.getElementById('szulDatum');
    const meret = document.getElementById('meret');
    const feltetelek = document.getElementById('feltetelek');
    const tavSelected = document.querySelector('input[name="tav"]:checked'); 

    // Ellenőrzése

    if (nev.value.trim() === '') {
        showError(nev, 'nevError', 'A név megadása kötelező.');
        isValid = false;
    } else {
        clearError(nev, 'nevError');
    }

    if (!emailRegex.test(email.value)) {
        showError(email, 'emailError', 'Érvénytelen e-mail formátum.');
        isValid = false;
    } else {
        clearError(email, 'emailError');
    }

    if (telefon.value.trim() !== '' && !telefonRegex.test(telefon.value)) {
        showError(telefon, 'telefonError', 'Hibás formátum (pl. 06301234567).');
        isValid = false;
    } else {
        clearError(telefon, 'telefonError');
    }

    if (szulDatum.value === '') {
        showError(szulDatum, 'szulDatumError', 'Add meg a dátumot.');
        isValid = false;
    } else {
        const birthDate = new Date(szulDatum.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            showError(szulDatum, 'szulDatumError', 'Csak 18 éven felülieknek.');
            isValid = false;
        } else {
            clearError(szulDatum, 'szulDatumError');
        }
    }

    const tavError = document.getElementById('tavError');
    if (!tavSelected) {
        tavError.style.display = 'block';
        isValid = false;
    } else {
        tavError.style.display = 'none';
    }

    if (!feltetelek.checked) {
        showError(feltetelek, 'feltetelekError', 'Kötelező elfogadni.');
        isValid = false;
    } else {
        clearError(feltetelek, 'feltetelekError');
    }

    
    if (isValid) {
        document.getElementById('formSuccessMessage').classList.remove('hidden');
        form.reset(); 
    }
});
