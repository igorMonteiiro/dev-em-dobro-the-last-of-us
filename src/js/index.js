// 1º pegar elemento do HTML
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

//2º dar um jeito de identificar o click do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //3º desmarcar o botão selecionado anterior
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");

    //4º marcar o botão clicado como se estivesse selecionado

    botao.classList.add("selecionado");

    //5º esconder a imagem ativa

    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");

    //6º aparecer a imagem de fundo correspondente

    imagens[indice].classList.add("ativa");
  });
});
