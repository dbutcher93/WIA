/*
     Name: Dakota Butcher
     Date: 9/05/14
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */
window.onload = function(){

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1



Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
    var theCanvas = document.getElementById("Canvas1");

    if(Modernizr.canvas){
        var theCanvas = document.getElementById("Canvas1");
        var ctx = theCanvas.getContext("2d");

        ctx.strokeStyle = "black";
        ctx.fillStyle = "#1953FF";
        ctx.lineWidth =5;

        ctx.strokeRect(0, 0, 50, 100);
        ctx.fillRect(0, 0, 50,100);
    

    

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
        var theCanvas2 = document.getElementById("Canvas2");
        var ctx2 = theCanvas2.getContext("2d");
        
        ctx2.strokeStyle = "black";
        ctx2.fillStyle = "rgba(250, 10, 26, 0.5)";
        ctx2.lineWidth = 5;
        
        
        ctx2.beginPath();
        ctx2.arc(50, 50, 20, 0, 2*Math.PI);
        ctx2.fill;
        ctx2.stroke();
        

    

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
        
        var theCanvas3 = document.getElementById("Canvas3");
        var ctx3 = theCanvas3.getContext("2d");
        
        ctx3.strokeStyle = "black";
        ctx3.lineWidth = 10;
        ctx3.lineCap = "round";
        
        ctx3.beginPath();
        ctx3.moveTo(120,100);
        ctx3.lineTo(200, 100);
        ctx3.moveTo(200, 100);
        ctx3.lineTo(250, 25);
        ctx3.moveTo(250,25);
        ctx3.lineTo(300, 100);
        ctx3.moveTo(300, 100);
        ctx3.lineTo(375,100);
        ctx3.moveTo(375,100);
        ctx3.lineTo(300, 170);
        ctx3.moveTo(300, 170);
        ctx3.lineTo(350, 275);
        ctx3.moveTo(350, 275);
        ctx3.lineTo(250, 170);
        ctx3.moveTo(250, 170);
        ctx3.lineTo(150, 275);
        ctx3.moveTo(150, 275);
        ctx3.lineTo(200, 170);
        ctx3.moveTo(200, 170);
        ctx3.lineTo(120, 100);
        ctx3.stroke();
        
        
    

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
        var theCanvas4 = document.getElementById("Canvas4");
        var ctx4 = theCanvas4.getContext("2d");
        
        ctx4.strokeStyle = "red";
        ctx4.lineWidth = 5;
        
        ctx4.beginPath();
        ctx4.moveTo(50, 200);
        ctx4.bezierCurveTo(50, 200, 200, 50,400, 200);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.moveTo(50, 200);
        ctx4.bezierCurveTo(50, 230, 100, 100,200, 200);
        ctx4.stroke();
        ctx4.moveTo(200, 200);
        ctx4.bezierCurveTo(200, 200, 300, 100,400, 200);
        ctx4.stroke();
    
    
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
        var theCanvas5 = document.getElementById("Canvas5");
        var ctx5 = theCanvas5.getContext("2d");
        
        var string = "Example text";
        
        ctx5.font = "30pt Verdana";
        ctx5.fillStyle = "blue";
        ctx5.fillText(string, 200, 40);
        
    
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
        var theCanvas6 = document.getElementById("Canvas6");
        var ctx6 = theCanvas6.getContext("2d");
        
        var  img = document.getElementById("img");
        
        ctx6.drawImage(img, 0,0);
        ctx6.drawImage(img, 50, 50, 200, 250);
    

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
        var theCanvas7 = document.getElementById("Canvas7");
        var ctx7 = theCanvas7.getContext("2d");
        
        ctx7.drawImage(img, 100, 100, 100, 150);
        ctx7.clearRect(100, 100, 100,100)
        
    }

    }