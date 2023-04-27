const formLogin = document.querySelector("#formLogin");

const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const inputCheckbox = document.querySelector(".input-checkbox");

const envelopeIcon = document.querySelector(".envelope-icon");
const lockIcon = document.querySelector(".lock-icon");

const btnLogin = document.querySelector(".btn-continue");

function validateForm() {
    console.log("inputEmail:", inputEmail.value);
    console.log("inputPassword:", inputPassword.value);
    console.log("inputCheckbox:", inputCheckbox.checked);
}

function hideEmailImage() {
    inputEmail.setAttribute('placeholder', '');
    envelopeIcon.style.display = 'none';
}

function showEmailImage() {
    if(inputEmail.value != '') {
        return;
    }
    envelopeIcon.style.display = 'block';
    inputEmail.setAttribute('placeholder', 'Enter your email');
}

function hidePasswordImage() {
    inputPassword.setAttribute('placeholder', '');
    lockIcon.style.display = 'none';
}

function showPasswordImage() {
    if(inputPassword.value != '') {
        return;
    }
    lockIcon.style.display = 'block';
    inputPassword.setAttribute('placeholder', 'Enter your password');
}

btnLogin.addEventListener('click', validateForm);

inputEmail.addEventListener('focus', hideEmailImage);

inputEmail.addEventListener('focusout', showEmailImage);

inputPassword.addEventListener('focus', hidePasswordImage);

inputPassword.addEventListener('focusout', showPasswordImage);
