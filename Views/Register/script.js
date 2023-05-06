const formRegister = document.querySelectorAll("#formRegister");

const inputUsername = document.querySelector(".input-username");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");

const userIcon = document.querySelector(".user-icon");
const envelopeIcon = document.querySelector(".envelope-icon");
const lockIcon = document.querySelector(".lock-icon");

const btnRegister = document.querySelector(".btn-register");

function validateForm() {
    const formData = new FormData(formRegister);
    const data = {};
  
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data)
}

function hideUsernameImage() {
    inputUsername.setAttribute('placeholder', '');
    userIcon.style.display = 'none';
}

function showUsernameImage() {
    if(inputUsername.value != '') {
        return;
    }
    userIcon.style.display = 'block';
    inputUsername.setAttribute('placeholder', 'Create your username');
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

btnRegister.addEventListener('click', validateForm);

inputEmail.addEventListener('focus', hideEmailImage);

inputEmail.addEventListener('focusout', showEmailImage);

inputPassword.addEventListener('focus', hidePasswordImage);

inputPassword.addEventListener('focusout', showPasswordImage);

inputUsername.addEventListener('focus', hideUsernameImage);

inputUsername.addEventListener('focusout', showUsernameImage);