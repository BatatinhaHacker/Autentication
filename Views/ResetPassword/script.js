const btnSend = document.querySelector(".btn-send");
const inputPassword = document.querySelector(".input-password");
const lockIcon = document.querySelector(".lock-icon");
const inputConfirmPassword = document.querySelector(".input-confirm-password");
const lockIcon1 = document.querySelector(".lock-icon-1");

btnSend.addEventListener('click', () => {
    location.replace("../Login/Index.html");
});

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

function hideConfirmPasswordImage() {
    inputConfirmPassword.setAttribute('placeholder', '');
    lockIcon1.style.display = 'none';
}

function showConfirmPasswordImage() {
    if(inputConfirmPassword.value != '') {
        return;
    }
    lockIcon1.style.display = 'block';
    inputConfirmPassword.setAttribute('placeholder', '..............');
}

inputPassword.addEventListener('focus', hidePasswordImage);

inputPassword.addEventListener('focusout', showPasswordImage);

inputConfirmPassword.addEventListener('focus', hideConfirmPasswordImage);

inputConfirmPassword.addEventListener('focusout', showConfirmPasswordImage);