const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nomeInput.value === "") {
        alert("Digite seu nome");
        return;
    }

    if (emailInput.value === "" || !verificaEmail(emailInput.value)) {
        alert("Digite um e-mail válido");
        return;
    }

    salvarDados(nomeInput.value, emailInput.value);

    nomeInput.value = "";
    emailInput.value = "";
});

function verificaEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function salvarDados(nome, email) {
    let dadosSalvos = localStorage.getItem("dadosUsuarios");
    dadosSalvos = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    dadosSalvos.push({ nome: nome, email: email });

    localStorage.setItem("dadosUsuarios", JSON.stringify(dadosSalvos));
}