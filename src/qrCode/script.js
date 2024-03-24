const container = document.querySelector(".container"),
  qrCodeBtn = document.querySelector("#qr-form button"),
  qrCodeInput = container.querySelector("#qr-form input"),
  qrCodeImg = container.querySelector("#qr-code img");
let resetTimer;
function generateQrCode() {
  let a = qrCodeInput.value;
  a &&
    ((qrCodeBtn.innerText = "Gerando c\xF3digo..."),
    (qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${a}`),
    qrCodeImg.addEventListener("load", () => {
      container.classList.add("active"),
        (qrCodeBtn.innerText = "C\xF3digo criado!"),
        (resetTimer = setTimeout(resetQRCode, 1e4));
    }));
}
function resetQRCode() {
  (qrCodeInput.value = ""),
    container.classList.remove("active"),
    (qrCodeBtn.innerText = "Gerar QR Code");
}
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
}),
  qrCodeInput.addEventListener("keydown", (a) => {
    "Enter" === a.code && generateQrCode();
  }),
  qrCodeInput.addEventListener("keyup", () => {
    qrCodeInput.value ||
      (container.classList.remove("active"),
      (qrCodeBtn.innerText = "Gerar QR Code"),
      clearTimeout(resetTimer));
  });
