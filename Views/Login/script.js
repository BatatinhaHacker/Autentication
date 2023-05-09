import data from '../../mockData.js'

const formLogin = document.querySelector("#formLogin");

const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const inputCheckbox = document.querySelector(".input-checkbox");

const envelopeIcon = document.querySelector(".envelope-icon");
const lockIcon = document.querySelector(".lock-icon");

function validateForm(e) {
    e.preventDefault();
  
    let email = inputEmail.value;
    let password = inputPassword.value;
  
    let matchFound = false;
    for(let i = 0; i < data.length; i++) {
      if(email === data[i].email && password === data[i].password) {
        matchFound = true;
        alert("Login successful");
        return;
      }
    }
  
    if(!matchFound) {
      alert('Invalid email or password');
    }
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

inputEmail.addEventListener('focus', hideEmailImage);

inputEmail.addEventListener('focusout', showEmailImage);

inputPassword.addEventListener('focus', hidePasswordImage);

inputPassword.addEventListener('focusout', showPasswordImage);

formLogin.addEventListener('submit', validateForm);