//carros:
let xCarros = [600, 550, 680, 650, 580, 700];
let yCarros = [40, 96, 152, 210, 270, 318];
let velocidadeCarros = [5, 7, 6, 8, 3, 4];
let comprimentoCarro = [50,60,80,80,60,50];
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro[i], alturaCarro); 
  }
}
  
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }  
} 

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }      
}

function passouTodaTela(xCarro){
  return xCarro < -30;
}



