let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 6; //declare a variable to hold total number of pages (states)
let img ;
let timerStart = 0;
let timerLength = 700;
let timerCount = 0;
let son = [];
let numImgs = 3;
let veg = [];
let numImgs2 = 2;

let x;
let y;
let xspeed;
let yspeed;
let bounceW;
let bounceH;
let b;
let r;





function preload(){
  img = loadImage("vegeta.png");
  img2 = loadImage("goku.png");
  bgImg = loadImage("rocky.png");
  bgImg2= loadImage("plain.jpg");
  gv = loadImage("vg.png");
  son[0] = loadImage('Goku 3.png');
  son[1] = loadImage('Goku 1.png');
  son[2] = loadImage('K.png');
  veg[0] =loadImage("vegeta3.png");
  veg[1] =loadImage("vegeta2.png");
  r = loadImage("red.png");
  b = loadImage("vegeta4.png");
  
 
  





}


function setup() {
  createCanvas(600, 508);
  console.log(pageNum);
  bounceW = r.width/15;
  bounceH = r.height/15;
  bounce2W = b.width/2.5;
  bounce2H = b.height/2.5;
  
  x = width/2;
  y = 100;
  xspeed = 30;
  yspeed = 20;
  
  
  
  
}
function draw() {
  
  if (pageNum == 1){
    background(0,225,225);
    image(bgImg,0,0,600,508);
    text("You have no chance in beating me Kakarot!", 5,50);
    textSize(30);
    image(img, 0,0,865,508);

  }
  else if (pageNum == 2){
    background(225,225,0);
    image(bgImg,0,0,900,508);
    text("We'll see about that.", 320,200);
    textSize(30);
    image(img2, -200,0,865,508);
    
  }
  else if (pageNum == 3){
background(0,255,225);
image(bgImg,0,0,900,508);
image(son[timerCount],0,0,600,508);
push();
translate(random(15), random(15)); 
textSize(50); 
text("KAIOKEN!!!", 185,100);
pop();
if (millis() - timerStart > timerLength){
timerCount++;
timerStart = millis();
if(timerCount >= numImgs){
timerCount = 0;
       
   
  }
      
console.log(timerCount);   
    
      }
    
  }
  

 if (pageNum == 4){
   if(timerCount >= numImgs2){
timerCount = 0; 
  }
background(0,255,255); 
image(bgImg,0,0,600,508);
image(veg[timerCount],0,0,700,550);
text("Hmph...", 100,100);
if (millis() - timerStart > timerLength){
timerCount++;
timerStart = millis();

  
   console.log(timerCount);

     
    }
  
  }
   if (pageNum == 5){
    background(0,225,255);
    image(bgImg,0,0,900,508)
     image(gv,0,0,600,508);
     push();
     translate(random(20), random(20));
      textSize(50);
    text("HAAAAAAAAH!!!", 30,430);
     pop();
  }
  
  else if (pageNum == 6){
    background(0,0,225);
    image(bgImg2,0,0,900,508)
    image(r, x,y, bounceW, bounceH);
    image(b,y,x, bounce2W, bounce2H);
    
  x = x + xspeed
  y = y + yspeed
  
     
  if (x + bounceW >= width || x == 0 ) {
    xspeed = xspeed * -1;
  } else if (x == 0) {
    xspeed = xspeed * -1;
  
  }
  
   if (y + bounceH >= height || y == 0 ) {
    yspeed = yspeed * -1;
   }
  
  
  }
  
}
  
       
  


//mousePressed() function will run each time the mouse is clicked
function mousePressed(){
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
     timerStart = millis();
    
  }
 
//otherwise, reset to first page
  else{
    pageNum = 1;
 
    }

console.log(pageNum);
   

}
