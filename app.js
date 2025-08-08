//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes
let amigos = [];

// Função para adicionar nomes
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona ao array
    amigos.push(nome);

    // Limpa o campo
    input.value = "";

    // Atualiza a lista visual
    atualizarLista();
}

// Função para mostrar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo secreto sorteado: <strong>${amigoSorteado}</strong></li>`;
}