const logInBtn = document.querySelector("#log-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

logInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
