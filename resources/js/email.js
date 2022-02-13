const err = document.querySelector(".errMsg");
const form = document.querySelector(".contact-us-form");

err.style.display = "none";

const reg =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function getInputValue() {
  const email = document.getElementById("email-field").value;
  if (!reg.test(email)) {
    err.style.display = "block";
    return;
  } else {
    err.style.display = "none";
  }
}
