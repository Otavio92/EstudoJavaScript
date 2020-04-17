//variaveis da bolinha:
let xBolinha = 300;
let yBolinha = 200;
let Diametro = 22;
let Raio = Diametro / 2;

//velocidade da bolinha:
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da minha raquete:
let xRaquete = 10;
let yRaquete = 200;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
//variaveis da raquete adversário:
let xRaqueteAdversario = 580;
let yRaqueteAdversario = 200;
let velocidadeYOponente;

let colisao = false;

//placar:
let meuspontos = 0;
let pontosOponente = 0;

//sons:
let somRaquete;
let trilha;
let ponto;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto  = loadSound("ponto.mp3");
  somRaquete = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//function compact*
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteAdversario, yRaqueteAdversario);
  movimentaRaquete();
  movimentaRaqueteAdversario();
  colisaoRaquete(xRaqueteAdversario, yRaqueteAdversario);
  colisaoRaquete(xRaquete, yRaquete);
  inserirPlacar();
  marcaPonto();
}
//function compact*

//bolinha:
  function mostraBolinha(){
    circle(xBolinha, yBolinha, Diametro);
  }
  
  function movimentaBolinha(){
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
  }

  function verificaColisaoBolinha(){
    if(xBolinha + Raio > width || xBolinha - Raio < 0){
      velocidadexBolinha *= -1;
    }
    if(yBolinha + Raio > height || yBolinha - Raio < 0){
    velocidadeyBolinha *= -1;
    }
  }
//bolinha*;

//Raquetes:
  function mostraRaquete(x, y){
    rect(x, y, RaqueteComprimento, RaqueteAltura);
  }

  function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;  
    }
     if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }

 function movimentaRaqueteAdversario(){
   velocidadeYOponente = yBolinha - yRaqueteAdversario - RaqueteComprimento / 2 - 59;
   yRaqueteAdversario += velocidadeYOponente;
  }

function colisaoRaquete(x, y){
 colisao = collideRectCircle(x,y,RaqueteComprimento,RaqueteAltura,xBolinha,yBolinha,Raio);
  if (colisao){
    velocidadexBolinha *= -1;
    somRaquete.play();
  }
}
//raquetes*;

//placar:
function inserirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255, 140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meuspontos += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
