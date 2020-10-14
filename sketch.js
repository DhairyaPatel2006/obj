var rect1, rect2;
var obj3,obj4

function setup() {
  createCanvas(800,400);
  rect1=createSprite(400, 200, 50, 50);
  rect1.debug=true;
  //rect1.velocityY=4;
  //rect1.veloccityX=-4;
  rect2= createSprite(100,200,50,50);
 // rect2.velocityY=4;
  //rect2.velocityX=-4;
  rect2.debug=true;
  obj3=createSprite(200,150,50,50);
  obj4= createSprite(350,250,50,50);
}

function draw() {
  background("blue"); 
  createEdgeSprites();
  obj4.x=mouseX;
  obj4.y=mouseY;
 /* if(rect1.x-rect2.x<(rect1.width/2)+(rect2.width/2)&&rect2.x-rect1.x<(rect1.width/2)+(rect2.width/2)
  ){
 
  rect1.velocityX*=-0.5;
  rect2.velocityX*=-0.5;
  }
  else{
    rect1.shapeColor="grey";
    rect2.shapeColor="grey";
    }
  if(rect1.y-rect2.y<(rect1.height/2)+(rect2.height/2)&&rect2.y-rect1.y<(rect1.height/2)+(rect2.height/2)){
    
    rect1.velocityY*=-1;
    rect2.velocityY*=-1;
  }
  else{
  rect1.shapeColor="grey";
  rect2.shapeColor="grey";
  }*/
  if(it(obj3,obj4)){
    obj3.shapeColor="red";
    obj4.shapeColor="red";
  }
  else{
    obj3.shapeColor="grey";
    obj4.shapeColor="grey";
  }

  drawSprites();
}
function it(object1,object2){
  if(object1.x-object2.x<(object1.width/2)+(object2.width/2)&&object2.x-object1.x<(object2.width/2)+(object1.width/2)
  &&object1.y-object2.y<(object1.height/2)+(object2.height/2)&&object2.y-object1.y<(object2.height/2)+(object1.height/2)){
   return true;
  }
  else{
   return false;
  }
}








