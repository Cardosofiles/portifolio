const main = document.querySelector("main"),
  root = document.querySelector(":root"),
  input = document.getElementById("input"),
  resultInput = document.getElementById("result"),
  allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
document.querySelectorAll(".charKey").forEach(function (a) {
  a.addEventListener("click", function () {
    const b = a.dataset.value;
    input.value += b;
  });
}),
  document.getElementById("clear").addEventListener("click", function () {
    (input.value = ""), input.focus();
  }),
  input.addEventListener("keydown", function (a) {
    return (
      a.preventDefault(),
      allowedKeys.includes(a.key)
        ? void (input.value += a.key)
        : void ("Backspace" === a.key &&
            (input.value = input.value.slice(0, -1)),
          "Enter" === a.key && calculate())
    );
  }),
  document.getElementById("equal").addEventListener("click", calculate);
function calculate() {
  (resultInput.value = "ERROR"), resultInput.classList.add("error");
  const result = eval(input.value);
  (resultInput.value = result), resultInput.classList.remove("error");
}
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (a) {
    const b = a.currentTarget;
    "Copy" === b.innerText
      ? ((b.innerText = "Copied!"),
        b.classList.add("success"),
        navigator.clipboard.writeText(resultInput.value))
      : ((b.innerText = "Copy"), b.classList.remove("success"));
  }),
  document
    .getElementById("themeSwitcher")
    .addEventListener("click", function () {
      "dark" === main.dataset.theme
        ? (root.style.setProperty("--bg-color", "#f1f5f9"),
          root.style.setProperty("--border-color", "#aaa"),
          root.style.setProperty("--font-color", "#212529"),
          root.style.setProperty("--primary-color", "#26834a"),
          (main.dataset.theme = "light"))
        : (root.style.setProperty("--bg-color", "#212529"),
          root.style.setProperty("--border-color", "#666"),
          root.style.setProperty("--font-color", "#f1f5f9"),
          root.style.setProperty("--primary-color", "#4dff91"),
          (main.dataset.theme = "dark"));
    });
