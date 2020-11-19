const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,350,50,50);
    box2 = new Box(900,350,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 =new Pig(825,350);
    log1= new Log(825,300,250,PI/2);
    box3 = new Box(750,250,50,50);
    box4 = new Box(900,250,50,50);
    box5 = new Box(825,150,50,50);
    pig2 =new Pig(825,250);
    log2= new Log(825,200,250,PI/2);
    log3= new Log(790,150,120,PI/7);
    log4= new Log(860,150,120,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}