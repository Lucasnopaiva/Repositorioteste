let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numbersecreto = gerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
  let kampo = document.querySelector(tag);
  kampo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  ExibirTextoNaTela("h1", "Jogo do Número Secreto");
  ExibirTextoNaTela("p", "Digite um número de 1 à 10");
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numbersecreto) {
    ExibirTextoNaTela("h1", "Acertou !");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    ExibirTextoNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numbersecreto) {
      ExibirTextoNaTela("h1", "Errou!");
      ExibirTextoNaTela("p", "O numero secreto é menor. ");
    } else {
      ExibirTextoNaTela("p", "O Número secreto é maior");
      ExibirTextoNaTela("h1", "Errou ");
    }

    tentativas++;
    limparCampo();
  }
}
console.log(numbersecreto);

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosDaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numbersecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
