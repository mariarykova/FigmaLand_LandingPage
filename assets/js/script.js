const btnSubscribe = document.getElementById("subscribe");
const email = document.getElementById("email");
const error = document.getElementById("error");

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(email.value)) {
    email.style.borderColor = "green";
    // error.textContent = "";
    error.style.color = "transparent";
  } else {
    email.style.borderColor = "red";
    error.style.color = "red";
    // error.textContent = "Enter correct Email";
  }
}

btnSubscribe.addEventListener("click", onInput);

let button = document.getElementsByClassName("order_btn");
let formaSend = document.getElementById("form");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", smoothscroll);
}

function smoothscroll() {
  formaSend.scrollIntoView({ behavior: "smooth" });
}