function preload() {
    img=loadImage('https://tse1.mm.bing.net/th?id=OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK&pid=Api&P=0&w=273&h=154');

    }
    
    function setup() {
    createCanvas(800,550);
    }
    
    function draw() {
    image(img,300,220,150,120);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(600,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,20,250);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,150,450,20);
      
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(150,400,450,20);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 160, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 160, 55, 55);
    
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(610, 410, 55, 55);
      
    fill(0,255, 0);
    stroke(128, 0, 0);
    ellipse(160, 410, 55, 55);
    }