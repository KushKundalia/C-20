var fixedrect , moveingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 80, 50);
  moveingrect=createSprite(400,200,80,30);
  fixedrect.shapeColor="green";
  moveingrect.shapeColor="green";
}

function draw() {
  background(0); 
   
  moveingrect.y=World.mouseY;
  moveingrect.x=World.mouseX;
if(moveingrect.x-fixedrect.x<fixedrect.width/2+moveingrect.width/2 && 
  fixedrect.x-moveingrect.x<fixedrect.width/2+moveingrect.width/2&&
  moveingrect.y-fixedrect.y<fixedrect.height/2+moveingrect.height/2 && 
  fixedrect.y-moveingrect.y<fixedrect.height/2+moveingrect.height/2){
    fixedrect.shapeColor="red";
    moveingrect.shapeColor="red";
}else{
  moveingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}
  drawSprites();
}