const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3,pig2,pig4,pig5,pig6,pig7,pig8,pig9,pig10;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   // box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);
    pig2 = new Pig(740, 350);
    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    pig3 = new Pig(660, 350);
    pig4 = new Pig(580, 350);
    
    pig5 = new Pig(760, 325);
    pig6 = new Pig(680, 325);
    pig7 = new Pig(600, 325);

    pig8 = new Pig(730, 275);
    pig9 = new Pig(680,275);

    pig10 = new Pig(705,225);





    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    strokeWeight(4);
   // box1.display();
  // box2.display();
    ground.display();
   pig1.display();
   pig1.score();
   pig2.display();
   pig2.score();
   pig4.display();
   pig4.score();
   pig5.display();
   pig5.score();
   pig6.display();
   pig6.score();
  
  
   pig7.display();
   pig7.score();
   pig8.display();
   pig8.score();
    pig9.display();
   pig9.score();
    pig10.display();
   pig10.score();

   // log1.display();

    //box3.display();
   // box4.display();
    pig3.display();
    pig3.score();
    //log3.display();

    //box5.display();
   //log4.display();
   //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       Matter.Body.setPosition(bird.body, {x: 200 , y:50 });
       bird.trajectory = [];
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}