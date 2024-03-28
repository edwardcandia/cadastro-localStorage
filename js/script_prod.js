const form = document.querySelector("#form");
const nomeProdutoInput = document.querySelector("#nome");
const codigoProdutoInput = document.querySelector("#codigo");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nomeProdutoInput.value === "") {
        alert("Digite o nome do produto");
        return;
    }

    if (codigoProdutoInput.value === "") {
        alert("Digite um código de produto válido");
        return;
    }

    salvarDados(nomeProdutoInput.value, codigoProdutoInput.value);

    nomeProdutoInput.value = "";
    codigoProdutoInput.value = "";
});

function salvarDados(nomeProduto, codigoProduto) {
    let dadosSalvos = localStorage.getItem("dadosProdutos");
    dadosSalvos = dadosSalvos ? JSON.parse(dadosSalvos) : [];

    dadosSalvos.push({ nome_produto: nomeProduto, codigo_produto: codigoProduto });

    localStorage.setItem("dadosProdutos", JSON.stringify(dadosSalvos));
}