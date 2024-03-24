const grid = document.querySelector(".grid"),
  spanPlayer = document.querySelector(".player"),
  timer = document.querySelector(".timer"),
  characters = ["js", "node", "python", "react", "vscode", "java", "windows"],
  createElement = (a, b) => {
    const c = document.createElement(a);
    return (c.className = b), c;
  };
let loop,
  firstCard = "",
  secondCard = "";
const resultUrlFinish = "../pages/finish.html",
  resultUrlGameOver = "../pages/gameOver.html",
  redirectToIndexPage = () => {
    window.location.href = "/pages/memoryGame/login.HTML";
  },
  checkEndGame = () => {
    const a = document.querySelectorAll(".disabled-card");
    14 === a.length &&
      (clearInterval(loop),
      alert(
        `Parabéns, ${spanPlayer.innerHTML}! Seu tempo restante de 40s foi de: ${timer.innerHTML}`
      ),
      alert("O jogo foi conclu\xEDdo com sucesso!"),
      redirectToIndexPage());
  },
  checkCards = () => {
    const a = firstCard.getAttribute("data-character"),
      b = secondCard.getAttribute("data-character");
    a === b
      ? (firstCard.firstChild.classList.add("disabled-card"),
        secondCard.firstChild.classList.add("disabled-card"),
        (firstCard = ""),
        (secondCard = ""),
        checkEndGame(!1))
      : setTimeout(() => {
          firstCard.classList.remove("reveal-card"),
            secondCard.classList.remove("reveal-card"),
            (firstCard = ""),
            (secondCard = "");
        }, 500);
  },
  revealCard = ({ target: a }) => {
    a.parentNode.className.includes("reveal-card") ||
      ("" === firstCard
        ? (a.parentNode.classList.add("reveal-card"),
          (firstCard = a.parentNode))
        : "" === secondCard &&
          (a.parentNode.classList.add("reveal-card"),
          (secondCard = a.parentNode),
          checkCards()));
  },
  createCard = (a) => {
    const b = createElement("div", "card"),
      c = createElement("div", "face front"),
      d = createElement("div", "face back");
    return (
      (c.style.backgroundImage = `url('/img/${a}.png')`),
      b.appendChild(c),
      b.appendChild(d),
      b.addEventListener("click", revealCard),
      b.setAttribute("data-character", a),
      b
    );
  },
  loadGame = () => {
    const a = [...characters, ...characters],
      b = a.sort(() => Math.random() - 0.5);
    b.forEach((a) => {
      const b = createCard(a);
      grid.appendChild(b);
    });
  },
  startTimer = () => {
    let a = 40;
    (timer.innerHTML = a),
      (loop = setInterval(() => {
        a--,
          (timer.innerHTML = a),
          0 === a &&
            (alert(
              `Game Over, ${spanPlayer.innerHTML}! Você não conseguiu achar as cartas antes do tempo de 40s`
            ),
            clearInterval(loop),
            alert("O tempo acabou! Game Over!"),
            redirectToIndexPage());
      }, 1e3));
  };
window.onload = () => {
  (spanPlayer.innerHTML = localStorage.getItem("player")),
    startTimer(),
    loadGame();
};
