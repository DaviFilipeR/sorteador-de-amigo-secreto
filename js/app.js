let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

        if (amigo.value == "") {
        alert("Digite o nome de um amigo para adicionar à lista.");
        return;
        }
        if (amigos.includes(amigo.value)) {
        alert("Esse amigo já foi adicionado à lista.");
        return;
        }

    amigos.push(amigo.value);

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = "";

    atualizarLista();
    atualizarSorteio();
 }

    


function sortear() {
    embaralhar(amigos);
    let resultado = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) {
        if (amigos.length <= 3) {
        alert("Você precisa de pelo menos quatro amigos para realizar o sorteio.");
        return;
        }
        if (i == amigos.length - 1) {
            resultado.innerHTML = resultado.innerHTML + amigos[i] + " -> " + amigos[0] + "<br>";
        } else {
            resultado.innerHTML = resultado.innerHTML + amigos[i] + " -> " + amigos[i + 1] + "<br>";
        }

}}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(amigos) {
    for (let i = amigos.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        [amigos[i-1],amigos[indiceAleatorio]] = [amigos[indiceAleatorio], amigos[i-1]];

    }
}

function atualizarSorteio() {
    let resultado = document.getElementById("lista-sorteio");
    resultado.innerHTML = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i<amigos.length; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];
        paragrafo.addEventListener("click", function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}