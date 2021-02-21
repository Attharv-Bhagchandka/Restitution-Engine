const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;

var Engine, World, Ground, Ball;

function setup() {
  createCanvas(400,400);

  Engine = engine.create();
  World = Engine.world;

  var Ground_option={
    isStatic: true
  }
  Ground = bodies.rectacgle(200, 400, 400, 10, Ground_option);

  var Ball_option={
    restitution: 100
  }
  Ball = bodies.circle(200, 200, 20, Ball_option);

  world.add(World, Ground);
  world.add(World, Ball);

}

function draw() {
  background('black');  
  engine.update(Engine)

  rectMode(CENTER);
  rectangle(Ground.position.x, Ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(Ball.position.x, Ball.position.y, 20);

  drawSprites();
}