const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Como a música e as flores podem ser usadas para promover a inclusão social em diferentes comunidades?",
        alternativas: [
            {
                texto: "Utilizar a música em eventos comunitários.",
                afirmação: "A música tem o poder de unir pessoas de diferentes origens e promove um ambiente de inclusão ao permitir que todos participem e se expressem de forma criativa.",
            },
            {
                texto: "Criar um jardim comunitário com flores de diversas regiões.",
               afirmação: "Jardins comunitários com flores de diversas partes do mundo podem ser um espaço de aprendizado e inclusão, onde as pessoas compartilham conhecimentos culturais e trabalhar juntas em um projeto comum"
            }

        ]
    },
    {
        enunciado: "Como a música e as flores podem ser usadas para promover a inclusão social em diferentes comunidades?",
        alternativas: [
            {
                texto: "Utilizar a música em eventos comunitários.",
                afirmação: ""
            },
            {
                texto: "Criar um jardim comunitário com flores de diversas regiões.",
               afirmação: ""
            }

        ]
    },
    {
        enunciado: "Como a música e as flores podem ser usadas para promover a inclusão social em diferentes comunidades?",
        alternativas: [
            {
                texto: "Utilizar a música em eventos comunitários.",
                afirmação: ""
            },
            {
                texto: "Criar um jardim comunitário com flores de diversas regiões.",
               afirmação: ""
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();