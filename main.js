const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual a data da independência do Brasil",
        alternativas: ["07 de Setembro","15 de Novembro","21 de Abril"]
    },
    {
        enunciado: "Quando foi o  dia que conrinthias ganhou o mundial em 2012 ",
        alternativas: ["15 de Dezembro","16 de Dezembro","17 de Dezembro"]
    },
    {
        enunciado: "Qual foi o último título do corinthians do brasileirao",
        alternativas: ["2016","2017","2018"]
    },
    {
        enunciado: "qual foi o resultado dos dois jogos do corinthians em 2012 contra boca juniorsqual foi o resultado dos dois jogos do corinthians em 2012 contra boca juniors",
        alternativas: ["2x1 Corinthians  ","3x1 Corinthians","4x2 Corinthians"]
    },


];


let atual = 0;
let PerguntaAtual;

function mostraPergunta(){
PerguntaAtual = perguntas[atual];
caixaPergunta.textContent = PerguntaAtual.enunciado;

}

mostraPergunta();