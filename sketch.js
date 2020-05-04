
var database
var drawing=[];
var currentPath = [];
var isDrawing =false
var path
var saveButton


function setup() {
  canvas=createCanvas(500,400);
  canvas.mousePressed(startPath);
 canvas.mouseReleased(endPath);
 saveButton = select('#saveButton')
 database = firebase.database(); 
 input = createInput('Name');
 button = createButton('Play');

}

function startPath(){
  isDrawing = true
  currentPath = [];
  drawing.push(currentPath);
}
function endPath(){
  isDrawing = false
  

}
function draw() {
  background("red"); 
  fill("black");
  textSize(18);
  text("CANVAS",150,50)
  input.position(220,220);
  button.position(220,310);
  button.mousePressed(()=>{
  input.hide();
  button.hide();
   


  });
  
  if(isDrawing){
  var point = {
    x : mouseX,
    y : mouseY
  }

    currentPath.push(point)

  }
 
  stroke("white")
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++){
    path = drawing[i];
    beginShape();
  
  for(var j = 0; j< path.length; j++){
   vertex(path[j].x,path[j].y)
  }
  endShape();

}
}


function saveDrawing(){
  var ref = database.ref('drawings');
  var data = {
    name : "Code",
    drawing: drawing
  }
}




