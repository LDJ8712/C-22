const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var engine,world,obj1





function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;

  var opt1 = {
    isStatic:true
  }
  
  obj1 = Bodies.rectangle(0,390,800,10,opt1)
    World.add(world,obj1)


    var opt2 = {
      restitution: 1,
    }
    
    obj2 = Bodies.rectangle(300,100,30,30,opt2)
    World.add(world,obj2)
  console.log(obj1)


}

function draw() {
  background("blue");
  Engine.update(engine);
rect (obj1.position.x,obj1.position.y,800,10)
rect (obj2.position.x,obj2.position.y,30,30)
}
