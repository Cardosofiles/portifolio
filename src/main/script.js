let menuIcon = document.querySelector("#menu-icon"),
  navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"), navbar.classList.toggle("active");
};
let sections = document.querySelectorAll("section"),
  navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((a) => {
    let b = window.scrollY,
      c = a.offsetTop - 100,
      d = a.offsetHeight,
      e = a.getAttribute("id");
    b >= c && b < c + d
      ? (navLinks.forEach((a) => {
          a.classList.remove("active"),
            document
              .querySelector("header nav a[href*=" + e + "]")
              .classList.add("active");
        }),
        a.classList.add("show-animate"))
      : a.classList.remove("show-animate");
  });
  let a = document.querySelector("header");
  a.classList.toggle("sticky", 100 < window.scrollY),
    menuIcon.classList.remove("bx-x"),
    navbar.classList.remove("active");
  let b = document.querySelector("footer");
  b.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};
function updateProgressBar() {
  const a = document.querySelectorAll(".progress");
  a.forEach((a) => {
    const b = parseInt(a.querySelector("span").textContent),
      c = a.querySelector(".bar span");
    c.style.width = `${b}%`;
  });
}
const percentageInput = document.querySelector(".percentage-input");
percentageInput.addEventListener("input", updateProgressBar);
function project() {
  window.open("/cienciaComputa\xE7\xE3o/index.html");
}
