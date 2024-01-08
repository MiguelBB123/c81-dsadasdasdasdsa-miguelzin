canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mouseDown",myMouseDown);

function myMouseDown(e){
    color = document.getElementById("color").value;
    console.log(color);
    mouseX = e.clientX-canvas.offsetLeft;
    mouseY = e.clientY-canvas.offsetTop;
    console.log("x= "+mouseX+"y= "+mouseY);
    circle(mouseX , mouseY); 
}

function circle(mouseX , mouseY){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(200, 200, 40, 0, 2*Math.PI);
    ctx.stroke();
}