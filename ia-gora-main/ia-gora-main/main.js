const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const caixaResultado1 = document.querySelector(".caixa-principal")

let atual = 0;
let perguntaAtual;
function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntas[0].enunciado;
}

function mostraPerguntas();

const perguntas = [
    {
        enunciado:"Como a música e as flores podem ser usadas para promover a inclusão social em diferentes comunidades?",
        alternativas:[

        ]
    }
]