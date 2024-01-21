function setup(){
canvas=createCanvas(600,600);
canvas.position(200,200);

video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 150, 150, 300, 300);


stroke("yellow");
fill("green");
rect(55, 40, 500, 20);
rect(55, 540, 500, 20);
rect(40, 40, 20, 500);
rect(540, 40, 20, 500)


stroke("red");
fill("blue");
circle(50, 50, 60);
circle(550, 50, 60);
circle(50, 550, 60);
circle(550, 550, 60);
}
function preload(){

}

function snapshot(){
    save("my_pic.png")
}

