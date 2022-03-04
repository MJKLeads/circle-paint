color = "red";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";

var widthofline = 2;
radius=9;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color=document.getElementById("colors").value;
    widthofline=document.getElementById("widthofline").value;
    radius=document.getElementById("radius").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;

        ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);

        ctx.stroke();

    }




}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}