var valuea= 0;
var valueb= 0;
var valuec= 0;
var valued= 0;

var colore = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  background('#003153');
  
  textFont('Montserrat');
  textSize(14);
  textAlign(CENTER);
  noStroke();
  fill(255);
  text('SHAKE TO CREATE YOUR DE STIJL PAINTING',width/2,height/2*1.8);
  text('AND ROTATE TO DESTROY THE ORDER!',width/2,height/2*1.9);
    setShakeThreshold(5);
    setMoveThreshold(10);
  
}

function draw() {
  
  stroke(0);
  strokeWeight(4);
  fill('#FF0000');
  rect(0, 0, valuea, valuea);
  
 
}
function deviceShaken() {
  valuea = valuea + random(5);
  if (valuea > 100) {
    valuea = 100;

    valueb=valueb + random(2);
    fill('#FFD800');
    rect(width/6,height/2 , valueb, valueb);
    fill('#FF0000');
    rect(0,height/2*1.5 , valueb/2, valueb/6);
    if(valueb > 245) {
        valueb = 245;
        
        valuec=valuec + random(3);
        fill('#FFFFFF');
        rect(width/2,height/3 , valuec, valuec);
        fill('#FFFFFF');
        rect(width/3, 0 , valuec*2, valuec/8);
        if(valuec > 300) {
           valuec = 300;
        }  
    }
  } else {
      valued=valued + random(5);
        fill('#FFD800');
        rect(width/9,height/2*0.5 , valued, valued);
        fill('#FF0000');
        rect(width/2,height/8 , valued, valued/2);
        if(valued > 100) {
           valued = 100;
           }
  }

}

function deviceTurned() {
  if (turnAxis == 'X'){
    rotate(30);
  } 
  if (turnAxis =='Y'){
      rotate(-30);
  }
  if(turnAxis == 'Z') {
      rotate(60);
  }
}

