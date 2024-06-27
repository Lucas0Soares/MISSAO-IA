const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrguntas = document.querySelector(".caixa-perguntas");
const caixaAternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const txtoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Pergunta 1",
        alternativas:["Aternativa 1", "Alternativa 2"],

    },
    {
        enunciado: "Pergunta 2",
        alternativas:["Aternativa 1", "Alternativa 2"],

    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Aternativa 1", "Alternativa 2"],

    },

];

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPerguntas();
