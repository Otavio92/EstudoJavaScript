//código do ator:

let xAtor = 366;
let yAtor = 90;
let colisao = false;
let meusPontos = 0;



function mostraAtor(){
   image(imagemDoAtor, yAtor, xAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    xAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    yAtor += 3;
  }
}

function verificaColisao(){
// collideReckCircle(x1, y1, width1, heigth1, cx, cy, diameter)  
  for(let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro[i], alturaCarro, yAtor, xAtor, 15)
    if(colisao){
        voltaInicioDoJogo()
        somColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaInicioDoJogo(){
  xAtor = 366;
}  
  
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,255,0));
  text(meusPontos, width / 5, 28);
} 

function marcaPonto(){
  if(xAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaInicioDoJogo();
  }
}
function podeSeMover(){
  return xAtor < 366;
}