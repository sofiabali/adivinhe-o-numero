let numeroSecreto;
let tentativasMaximas = 10;
let tentativasRestantes;
let palpites = [];
const inputPalpite = document.getElementById("palpite");
const btnEnviar = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const historicoTexto = document.getElementById("historico");


function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 20) + 1;
    tentativasRestantes = tentativasMaximas;
    palpites = [];

    mensagem.textContent = "Boa sorte! Digite um número e clique em enviar.";
    tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    historicoTexto.textContent = "Seus palpites: Nenhum ainda.";
    inputPalpite.value = "";
    inputPalpite.disabled = false;
    btnEnviar.disabled = false;
    btnReiniciar.classList.add("hidden");

    console.log("Número secreto (debug):", numeroSecreto); 
}

function verificarPalpite() {
    const palpite = Number(inputPalpite.value);

    if (!palpite || palpite < 1 || palpite > 20) {
        mensagem.textContent = "⚠️ Digite um número válido entre 1 e 20!";
        return;
    }

    palpites.push(palpite);
    tentativasRestantes--;

    if (palpite === numeroSecreto) {
        mensagem.textContent = ` Parabéns! Você acertou o número ${numeroSecreto}!`;
        fimDeJogo();
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = ` Suas tentativas acabaram! O número era ${numeroSecreto}.`;
        fimDeJogo();
    } else {
        if (palpite < numeroSecreto) {
            mensagem.textContent = "📉 O número secreto é MAIOR!";
        } else {
            mensagem.textContent = "📈 O número secreto é MENOR!";
        }
        tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;
        historicoTexto.textContent = "Seus palpites: " + palpites.join(", ");
    }

    inputPalpite.value = "";
}

function fimDeJogo() {
    inputPalpite.disabled = true;
    btnEnviar.disabled = true;
    btnReiniciar.classList.remove("hidden");
}


btnEnviar.addEventListener("click", verificarPalpite);
btnReiniciar.addEventListener("click", iniciarJogo);


iniciarJogo();
