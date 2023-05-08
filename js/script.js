const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const message = document.querySelector("#error");

function validateInputs() {
  const password = document.querySelector("#passwd");
  const password2 = document.querySelector("#password2");
  const message = document.querySelector("#error");

  if (password.value.length === 0) {
    error.innerText = "Please provide a password";
  } else if (password.value !== password2.value) {
    error.innerText = "*Password do not match";
    password.classList.add("error");
    password2.classList.add("error");
  }
}
