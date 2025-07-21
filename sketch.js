let size = 50 

//setup - run once when the code is first starts
function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things
  background(180, 222, 240); // = light blue (0, 0, 200)= royal blue 
  
}
//draw - this function loops, the code within read through repeatedly while running
function draw() {

  noStroke(); // no outline 

  //petals 
  fill(255, 133, 218)
  circle (50, 90, 35)
  circle (60, 65, 35)
  circle (90, 60, 35)
  circle (105, 85, 35)
  circle (95, 110, 35)
  circle (70, 110, 35)

  //center of flower
  fill(255, 245, 133)
  circle (80, 85, 30)


 } 

  // fill(252, 187, 239)
  // circle (50, 90, 25)
  // circle (60, 65, 25)
  // circle (90, 62, 25)
  // circle (105, 85, 25)
  // circle (95, 106, 25)
  // circle (70, 108, 25)

//   //body 
//   fill( 150, 150,  250); // lilac colour 
// ellipse(100, 100, size + 28, size); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
// triangle (
//   75, 100, 
//   30, 75, 
//   30, 125);


// //arm
// fill( 120, 150,  250); // light blue/perrywinkle 
// triangle (
//   75, 110, 
//   75, 150, 
//   110, 110);// triangle(x1, y1, x2, y2, x3, y3)

// //eye 
// fill(0)
// circle(120, 95, 8)
 

//mouth 
//arc --
// angle mode to degrees nit radiance -

//notes
//colour - go to colour picker on google, take the RGB values and put that in fill ()
//strokeWeight() = thickness of the outline 

//line(500, 500, 0, 0) // draws a straight line in the top left corner, the first number changes length but keeps line straight
//line(0, 500, 500, 0) // the x1 and y2 are the corners 
//line(500, 150, 0, 150) // 70 essentially brings the line down or up depending on the number, 500 & 0 are essentially determines the length of the line, making 500 smaller and 0 bigger makes line shorter 
//line(500, 270, 0,270) // 70 essentially brings the line down or up depending on the number, 500 & 0 are essentially determines the length of the line, making 500 smaller and 0 bigger makes line shorter  


// the first is the x and y of where is starts and the the last are the x and y of where it ends 