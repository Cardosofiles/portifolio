const input = document.querySelector(".login__input"),
  button = document.querySelector(".login__button"),
  form = document.querySelector(".login-form"),
  validateInput = ({ target: a }) =>
    3 < a.value.length
      ? void button.removeAttribute("disabled")
      : void button.setAttribute("disabled", ""),
  handleSubmit = (a) => {
    a.preventDefault(),
      localStorage.setItem("player", input.value),
      (window.location = "/pages/memoryGame/gamePage.HTML");
  };
input.addEventListener("input", validateInput),
  form.addEventListener("submit", handleSubmit);
