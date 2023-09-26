var runway,runwayImage,plane,planeImage,city0,city0Image,city1,city1Image,r,rI//,plane1Image
var speed = 1
var key
function preload(){
  runwayImage=loadImage("runway.webp")
  planeImage=loadImage("plane.png")
  city0Image=loadImage("city0.jpg")
  city1Image=loadImage("city1.1.jpg")
  rI=loadImage("r.png")
 // plane1Image=loadImage("plane1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
   runway=createSprite(windowWidth/2,windowHeight/2,width,height)

  runway.addImage(runwayImage)
  runway.scale=2.3
  runway.visible=true
  city0=createSprite(windowWidth/2,windowHeight/2,width,height)

  city0.addImage("city00",city0Image)

  city0.scale=4.95
  city0.visible=false

  city1=createSprite(windowWidth/2,windowHeight/2,width,height)
  
  city1.addImage(city1Image)
  city1.visible=false
  city1.scale=5.2
  plane=createSprite(windowWidth/2,windowHeight/2,width,height)

  plane.addImage(planeImage)
 // plane.addImage(plane1Image)
  r=createSprite(width-30,height-90,50,20)

  r.addImage(rI)


  r.visible=true
 
 // thing1=createSprite(windowWidth/2,725,width,10)
 // thing1.shapeColor="red"
}

function draw() {
  background("green")
 // plane.changeImage(planeImage)
  if(keyIsDown(UP_ARROW)){
    key = "up"
    plane.y=plane.y-(speed)
    plane.scale=plane.scale-(speed/500)
    //console.log(plane.y)
    console.log(plane.scale)
    plane.rotation=0
  }
  if(keyIsDown(DOWN_ARROW)){
    key="down"
    plane.y=plane.y+ (speed)
    plane.scale=plane.scale+(speed/500)
   // console.log(plane.x)
   // console.log(width)
   plane.rotation=0
  }
  if(keyIsDown(LEFT_ARROW)){
    plane.x= plane.x-(speed/2)
    //  plane.rotationSpeed=1
    // setTimeout(plane,2000)
    //  plane.rotationSpeed=0
    leftTimer()
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    plane.x= plane.x+(speed/2)
 //   plane.rotationSpeed=-1
  //  setInterval(2000)
   // plane.rotationSpeed=0
   rightTimer()
   
  }
  if(plane.y<1.6 && runway.visible==true && key == "up"){
    runway.visible=false
    city0.visible=true
    plane.y=550
    plane.scale=1
 
  }
  
  if(plane.y<100 && city0.visible==true && key == "up"){
    runway.visible=false
    city0.visible=false
    city1.visible=true
    plane.y=550
    plane.scale=1

  }

   if(plane.y>625 && city1.visible==true && key == "down"){
    runway.visible=false
    city0.visible=true
    city1.visible=false
    plane.y=50
    plane.scale=0.1
   }
   if(plane.y>625 && city0.visible==true && key == "down"){
    runway.visible=true
    city0.visible=false
    plane.scale=0.25
    plane.y=50
   }
  
   if(keyDown("R")){
    runway.visible=true
    city0.visible=false
    city1.visible=false
    plane.scale=1
    plane.y=windowHeight-250
    plane.x=windowWidth/2
    plane.rotation=0
  //  plane.addImage(planeImage)
 // plane.changeImage(plane1Image)
   }
   if(plane.x<=25 || plane.x>=width-25){
    plane.x=windowWidth/2
   }
    if(plane.y<0){
    plane.y=windowHeight-100
    plane.scale=1
    }
   if(keyDown("1")){
    speed=2
    
   }
   if(keyDown("2")){
    speed=4
   }
   if(keyDown("3")){
    speed=5
   }
   if(keyDown("4")){
    speed=6
   }
   if(keyDown("5")){
    speed=7
   }
   if(keyDown("6")){
    speed=8
   }
   if(keyDown("7")){
    speed=9
   }
   if(keyDown("8")){
    speed=10
   }
   if(keyDown("9")){
    speed=12
   }
  drawSprites();
  }

function leftTimer(){
//console.log("hi")

 plane.rotationSpeed=-0.5
 setTimeout(setAlert,1000)
}

function setAlert(){
 plane.rotationSpeed=0
}

function rightTimer(){
//console.log("hi")

 plane.rotationSpeed=0.5
 setTimeout(setAlert,1000)
}