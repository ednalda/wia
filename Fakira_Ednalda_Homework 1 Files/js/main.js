/*
     Name:Ednalda Fakira
     Date:07/10/2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP */


// Setup up 7 different Canvases in index.html one for each problem.



window.onload = function() {
				var theCanvas1 = document.getElementById('canvas1');
			    var theCanvas2 = document.getElementById('canvas2');
                var theCanvas3 = document.getElementById('canvas3');
                var theCanvas4 = document.getElementById('canvas4');
                var theCanvas5 = document.getElementById('canvas5');
                var theCanvas6 = document.getElementById('canvas6');
                var theCanvas7 = document.getElementById('canvas7');

//if(modernizr.canvas){
	//var theCanvas=document.getElementById("canvas1");
	//var ctx=theCanvas.getContext("2d");
	//ctx.font="25pt Georgia";
	//ctx.fillText("Canvas is supported", 20, 60);

	//else{
		//Canvas is not Supported
	//}

	//console.log(Modernizr);




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

				if (theCanvas1 && theCanvas1.getContext) {
					var ctx = theCanvas1.getContext("2d");
					if (ctx) {
						//Setup some basic drawing info
						ctx.strokeStyle = "black";
						ctx.fillStyle = "blue";
						ctx.lineWidth= 10;
						
						//Draw A rectangle
						
						ctx.fillRect(75,50,50, 100);
						ctx.strokeRect(75,50,50,100);	
						
					}

				}
           

    	       
    	       


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


if (theCanvas2 && theCanvas2.getContext) {
					var ctx = theCanvas2.getContext("2d");
					if (ctx) {
						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgba(255, 0,0, 0.5)';
						ctx.lineWidth = 5;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(50, 50, 20, 0, radians);
						ctx.fill();
						ctx.stroke();
						
					}

				}
           

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
 if (theCanvas3 && theCanvas3.getContext) {
					var ctx = theCanvas3.getContext("2d");
					if (ctx) {
						//Setup some basic drawing info
						ctx.strokeStyle = "blue";
						ctx.fillStyle = "green";
						ctx.lineWidth= 2;
						
						//Draw A Star
						ctx.moveTo(100, 100);
		                ctx.lineTo(140, 20);
		                ctx.lineTo(215, 78);
		                ctx.lineTo(161, 130);
		                ctx.lineTo(174, 205);
		                ctx.lineTo(100, 170);
		                ctx.lineTo(41, 205);
		                ctx.lineTo(53, 130);
		                ctx.lineTo(100, 78);
		                ctx.lineTo(74, 67);
		                ctx.lineTo(100, 100);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						
						
					}

				}
           
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
 if (theCanvas4 && theCanvas4.getContext) {
					var ctx = theCanvas4.getContext("2d");
					if (ctx) {
						//Setup some basic drawing info
						ctx.strokeStyle = "black";
						ctx.fillStyle = "blue";
						ctx.lineWidth= 10;
						
						ctx.beginPath();
                        ctx.moveTo(50,200);
                        //(cx1,cy1,cx2,cy2,x,y)
                        ctx.bezierCurveTo(50, 100, 200, 100, 200, 200);
                        ctx.stroke();
                        ctx.closePath();
						ctx.fill();
						
						ctx.beginPath();
                        ctx.moveTo(130,200);
                        //(cx1,cy1,cx2,cy2,x,y)
                        ctx.quadraticCurveTo(150, 400, 100, 300);
                        ctx.stroke();
					}

				}
           
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
 if (theCanvas5 && theCanvas5.getContext) {
					var ctx = theCanvas5.getContext("2d");
					if (ctx) {
						var theString="Drawing text on a canvas";
						//Simple text using defaults
						ctx.fillText(theString,20,20);
						//Style the font
						ctx.font="25pt Georgia";
						ctx.fillStyle="blue";
						ctx.fillText(theString, 20, 60);
						//Stroke and fill text
						ctx.font="32pt Verdana";
						ctx.fillStyle="yellow";
						ctx.fillText(theString, 20, 100);
						ctx.strokeText(theString,20,160);
					}

				}
           

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
if (theCanvas6 && theCanvas6.getContext) {
					var ctx = theCanvas6.getContext("2d");
					if (ctx) {
						//create a variable to hold the image
						var srcImg=document.getElementById("img");
						//draw an image direct onto the canvas
						ctx.drawImage(srcImg,0,0);
						//Draw a scaled dow image
						//DrawImage(srcImg, dx, dy, dw, dh)
						ctx.drawImage(srcImg, 50, 50, 100, 50);
						//Draw a slice Image
						//drawimage(srcImage, sx, sy, sw, sh, dx, dy, dw,dh)
						ctx.drawImage(srcImg, 100, 20, 40, 50, 40, 40, 90, 180);

					}

				}
           
 

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
if (theCanvas7 && theCanvas7.getContext) {
					var ctx = theCanvas7.getContext("2d");
					if (ctx) {
						

						var theString="Merry Christmas";
						
						//Style the font
						ctx.font="25pt Georgia";
						ctx.fillStyle="red";
						ctx.fillText(theString, 70, 60);



                        ctx.strokeStyle = "black";
						ctx.fillStyle = "blue";
						ctx.lineWidth= 10;
						ctx.fillRect(120,300,150, 50);
						ctx.strokeRect(120,300,150,50);

                        ctx.strokeStyle = "black";
						ctx.fillStyle = "green";
						ctx.lineWidth= 2;
						ctx.moveTo(10, 300);
		                ctx.lineTo(200, 100);
		                ctx.lineTo(400, 300);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();


						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(250, 200, 10, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(200, 280, 10, 0, radians);
						ctx.fill();
						ctx.stroke();

						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(130, 250, 10, 0, radians);
						ctx.fill();
						ctx.stroke();


						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(150, 170, 10, 0, radians);
						ctx.fill();
						ctx.stroke();



						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(190, 220, 10, 0, radians);
						ctx.fill();
						ctx.stroke();
						

						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(280, 260, 10, 0, radians);
						ctx.fill();
						ctx.stroke();
						

						ctx.strokeStyle= "black";
						ctx.fillStyle = 'rgb(255, 0,0)';
						ctx.lineWidth = 1;	

						//Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						 
						//Stroke a circle
						ctx.beginPath();
						//arc(x, y, r, sA, eA, Clockwise or counter);
						ctx.arc(200, 130, 10, 0, radians);
						ctx.fill();
						ctx.stroke();


						ctx.strokeStyle = "yellow";
						ctx.lineWidth= 10;
						
						ctx.beginPath();
                        ctx.moveTo(110,200);
                        //(cx1,cy1,cx2,cy2,x,y)
                        ctx.bezierCurveTo(270, 80, 200, 350, 320, 220);
                        ctx.stroke();
                        ctx.closePath();
                      


				}
           

			}

		}
