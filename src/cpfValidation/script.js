let database = [
  { cpf: "28255158685", nome: "Bruno Henrique Martins da Silva" },
  { cpf: "27766548631", nome: "Diogo Coutinho de Freitas" },
  { cpf: "36821162069", nome: "Gabriel Alc\xE2ntara Ribeiro" },
  { cpf: "92073138632", nome: "Gabriel Alves dos Santos" },
  { cpf: "13075295698", nome: "Guilherme Guimar\xE3es Freitas" },
  { cpf: "61378356691", nome: "Gustavo Martins Freitas" },
  { cpf: "66754914661", nome: "Henrique Azevedo Rezende" },
  { cpf: "67995221690", nome: "Igor dos Reis Alves" },
  { cpf: "13660717606", nome: "Jo\xE3o Batista Cardoso Miranda" },
  { cpf: "72592343695", nome: "Jo\xE3o Luiz Alves Mamede Netto" },
  { cpf: "11804805629", nome: "Jos\xE9 Henrique Xavier" },
  { cpf: "80277631696", nome: "Kau\xE3 Cassiano Silva" },
  { cpf: "94289546676", nome: "Marcos Vin\xEDcius Cardoso de Ara\xFAjo" },
  { cpf: "90995203601", nome: "Maria Eduarda Borges" },
  { cpf: "82872971688", nome: "Raphael Ribeiro Rufino" },
  { cpf: "76830296617", nome: "Victor Hugo Naves Rodrigues" },
  { cpf: "14472908603", nome: "Victor Jos\xE9 Moraes de Lima" },
  { cpf: "50872559653", nome: "Vinicius Patricio Silva Santos" },
  { cpf: "80050114662", nome: "V\xEDtor Tetsuya Kazuma" },
];
function validarCPF() {
  const a = document.getElementById("cpf").value,
    b = a.replace(/[^\d]+/g, "");
  if (11 !== b.length || /^(\d)\1+$/.test(b))
    return alert("CPF inv\xE1lido!"), resetarResultado(), void limparInput();
  let c,
    d = 0;
  for (let a = 1; 9 >= a; a++) d += parseInt(b.substring(a - 1, a)) * (11 - a);
  if (
    ((c = (10 * d) % 11),
    (10 === c || 11 === c) && (c = 0),
    c !== parseInt(b.substring(9, 10)))
  )
    return alert("CPF inv\xE1lido!"), resetarResultado(), void limparInput();
  d = 0;
  for (let a = 1; 10 >= a; a++) d += parseInt(b.substring(a - 1, a)) * (12 - a);
  if (
    ((c = (10 * d) % 11),
    (10 === c || 11 === c) && (c = 0),
    c !== parseInt(b.substring(10, 11)))
  )
    return alert("CPF inv\xE1lido!"), resetarResultado(), void limparInput();
  const e = database.find((a) => a.cpf === b);
  e ? alert(`CPF válido! Nome: ${e.nome}`) : alert("CPF v\xE1lido!"),
    resetarResultado(),
    limparInput();
}
function resetarResultado() {
  setTimeout(() => {
    document.getElementById("resultado").textContent = "";
  }, 3000);
}
function limparInput() {
  document.getElementById("cpf").value = "";
}
function toggleBackground() {
  const a = document.querySelector("footer"),
    b = document.querySelectorAll(".team.gray"),
    c = "none" === a.style.background;
  c
    ? ((a.style.background = ""),
      b.forEach(function (a) {
        a.style.background = "";
      }))
    : ((a.style.background = "none"),
      b.forEach(function (a) {
        a.style.background = "none";
      }));
}
const button = document.getElementById("toggleBackgroundButton");
button.addEventListener("click", function () {
  toggleBackground();
});
