//imagem do jogo:
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//som do jogo:
let trilhaSonora;
let somColisao;
let somPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoCarro1 = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2];
  
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}