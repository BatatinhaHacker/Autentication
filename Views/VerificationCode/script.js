const inputField1 = document.querySelector("#code1");
const inputField2 = document.querySelector("#code2");
const inputField3 = document.querySelector("#code3");
const inputField4 = document.querySelector("#code4");


const btnSend = document.querySelector(".btn-send");


btnSend.addEventListener('click', () => {
    location.replace("../ResetPassword/Index.html");
});


inputField1.addEventListener("input", function(event) {
  const inputValue = inputField1.value;

  if (isNaN(inputValue)) {
    inputField1.value = "";
  }

  if (inputValue.length > 1) {
    inputField1.value = inputValue.slice(0, 1);
  }
});

inputField2.addEventListener("input", function(event) {
  const inputValue = inputField2.value;

  if (isNaN(inputValue)) {
    inputField2.value = "";
  }

  if (inputValue.length > 1) {
    inputField2.value = inputValue.slice(0, 1);
  }
});

inputField3.addEventListener("input", function(event) {
  const inputValue = inputField3.value;

  if (isNaN(inputValue)) {
    inputField3.value = "";
  }

  if (inputValue.length > 1) {
    inputField3.value = inputValue.slice(0, 1);
  }
});

inputField4.addEventListener("input", function(event) {
  const inputValue = inputField4.value;

  if (isNaN(inputValue)) {
    inputField4.value = "";
  }

  if (inputValue.length > 1) {
    inputField4.value = inputValue.slice(0, 1);
  }
});

