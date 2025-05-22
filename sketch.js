function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;
function draw() {
  background(150);//tela de fundo cinza
    stroke(0);//borda das figuras
    strokeWeight(5);//espessura das bordas
    fill("yellow");//cor do rosto amarelo em inglês
    circle(200,200,300);//circulo do rosto
    fill("#FFFFFF");//cor dos olhos branco HEXADECIMAL
    circle(150,150,80);//olho direito
    circle(250,150,80);//olho esquerdo
    fill(color(0,255,0));//cor do nariz verde RGB
    line(130,265,278,265);//linha da boca
    triangle(150, 233, 196, 202, 234, 236); //triângulo nariz
    line(100,101,166,92);//sobrancelha direita
    line(210,90,263,86);//sobrancelha esquerda
    //circle(135,150,30);//pupila direita
    //circle(236,147,30);pupila esquerda
    circle(olhoX,olhoY,10);//pupila dir movimento
    olhoX = map(mouseX, 0, 400, 130,170); //variavel local posição X pupila
    olhoY = map(mouseY, 0, 400, 130,170); //variavel local posição Y pupila 
    circle(olhoX + 100,olhoY,10);//pupila esquerda movimento
 
  if(mouseIsPressed){     //se mouse clicado 
    console.log(mouseX,mouseY);
    // mostra coordenada X e Y
  }
  
}