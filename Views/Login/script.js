const formLogin = document.querySelector("#formLogin");

const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const inputCheckbox = document.querySelector(".input-checkbox");

const envelopeIcon = document.querySelector(".envelope-icon");
const lockIcon = document.querySelector(".lock-icon");

const btnLogin = document.querySelector(".btn-continue");

function validateForm(e) {
    e.preventDefault();

    if(!inputEmail.value) {
        const emailError = document.getElementById('email-error');
        emailError.textContent = 'Please enter your email';
        return;
    }
    if (!passwordInput.value) {
        const passwordError = document.getElementById('password-error');
        passwordError.textContent = 'Please enter your password';
        return;
      }

    const formData = new FormData(formLogin);
  
    const email = formData.get('email');
    const password = formData.get('password');
    const remember = formData.get('remember') === 'on';
  
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', remember);

    this.submit();
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