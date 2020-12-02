
var dog;
var happydog;
var database;
var foodS;
var foodStock;
var dogimg;
var doghimg;

function preload()
{
  dogimg=loadImage("dogimg.png");
  doghimg=loadImage("dogimg1.png");
}

function setup() {
  database= firebase.database();
  console.log(database);
  createCanvas(500, 500);
  Dog= createSprite(250,250,10,10);
  dog.addImage(dogimg);
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(doghimg);
drawSprites();
text("Note:Press UP_ARROW Key To Feed Drake Milk",100,100)
  }

}
function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x=x-1
  }
  
  database.ref("/").update({
    food:x
  })
}



