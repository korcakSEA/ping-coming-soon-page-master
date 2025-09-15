const form = document.querySelector("form");
const email = document.getElementById("email");
const warningEl = document.querySelector(".js-warning");

// Event listener on "form" watches for "submit" event
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateField(email);
});

// when input field is clicked "gap" class and error message are removed
email.addEventListener("click", function(){
  form.classList.remove("gap");
  warningEl.innerText = "";
})

// Function is getting active once submit button is clicked
function validateField() {
  const emailEl = email.value.trim();
  
  // Email validation with is statements
  if (emailEl === "") {
    setErrorMsg("Whoops! you forgot something to enter.");
    return;
  }

  if (!isEmail(emailEl)) {
    setErrorMsg("Please provide a valid email address.");
    return;
  } 
}

// Error messages
function setErrorMsg(msg) {
  form.classList.add("gap");
  warningEl.innerText = msg;
}

// Email validation with regex
function isEmail(email) {
  const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return re.test(email);
}