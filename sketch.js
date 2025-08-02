const { switcher, rectangle, dpetal1, dflowercenter1, dpetal2, dflowercenter2, dpetal3, dflowercenter3, dpetal4, dflowercenter4, dpetal5, dflowercenter5, dpetal6, dflowercenter6 } = require("./my_wallpaper");

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
function my_symbol() {
  //rect(40 ,40, rect_width, rect_height);
  //og d petal 35 


  if (switcher == true) {
    rectangle();

  }
  noStroke(); // no outline 



  //FLOWER 1 
  //shadow
  fill(196, 26, 139);
  circle(64, 89, dpetal1);
  circle(76, 63, dpetal1);
  circle(106, 58, dpetal1);
  circle(83, 110, dpetal1);

  //petals 
  fill(255, 39, 183);
  circle(70, 90, dpetal1);
  circle(80, 65, dpetal1);
  circle(110, 60, dpetal1);
  circle(125, 85, dpetal1);
  circle(115, 110, dpetal1);
  circle(87, 110, dpetal1);

  //center of flower
  fill(255, 245, 133);
  circle(100, 85, dflowercenter1);

  // FLOWER 2 
  //shadow 
  fill(214, 123, 26);
  circle(156, 9, dpetal2);
  circle(137, 19, dpetal2);
  circle(142, 39, dpetal2);
  //petals 
  fill(255, 147, 31);
  circle(160, 10, dpetal2);
  circle(140, 20, dpetal2);
  circle(145, 40, dpetal2);
  circle(165, 45, dpetal2);
  circle(175, 26, dpetal2);

  //center 
  fill(97, 227, 255);
  circle(158, 28, dflowercenter2);

  //FLOWER 3 
  //shadow
  fill(152, 191, 46);
  circle(135, 154, dpetal3);
  circle(146, 174, dpetal3);
  circle(147, 134, dpetal3);
  circle(170, 134, dpetal3);

  //petals
  fill(188, 234, 58);
  circle(140, 155, dpetal3);
  circle(152, 175, dpetal3);
  circle(175, 175, dpetal3);
  circle(185, 155, dpetal3);
  circle(152, 135, dpetal3);
  circle(175, 135, dpetal3);

  //center 
  fill(255, 77, 7);
  circle(164, 155, dflowercenter3);

  //FLOWER 4 
  //shadow 
  fill(179, 35, 30);
  circle(27, 164, dpetal4);
  circle(32, 174, dpetal4);
  circle(32, 156, dpetal4);
  circle(43, 156, dpetal4);

  //petals
  fill(255, 77, 77);
  circle(30, 165, dpetal4);
  circle(35, 175, dpetal4);
  circle(45, 175, dpetal4);
  circle(50, 165, dpetal4);
  circle(45, 157, dpetal4);
  circle(35, 157, dpetal4);

  //center 
  fill(188, 234, 58);
  circle(40, 165, dflowercenter4);

  //FLOWER 5 
  //shadow 
  fill(96, 162, 168);
  circle(25, 24, dpetal5);
  circle(31, 14, dpetal5);
  circle(43, 14, dpetal5);
  circle(30, 34, dpetal5);

  //petals
  fill(97, 227, 255);
  circle(27, 25, dpetal5);
  circle(33, 15, dpetal5);
  circle(45, 15, dpetal5);
  circle(50, 25, dpetal5);
  circle(33, 35, dpetal5);
  circle(45, 35, dpetal5);

  //center 
  fill(255, 151, 80);
  circle(39, 25, dflowercenter5);

  //FLOWER 6 
  //shadow 
  fill(95, 39, 143);
  circle(-3, 109, dpetal6);
  circle(-3, 120, dpetal6);
  circle(8, 103, dpetal6);
  circle(7, 124, dpetal6);

  // //petals 
  fill(141, 56, 214);
  circle(0, 110, dpetal6);
  circle(10, 105, dpetal6);
  circle(18, 110, dpetal6);
  circle(18, 120, dpetal6);
  circle(10, 125, dpetal6);
  circle(0, 120, dpetal6);

  // //center
  fill(255, 237, 57);
  circle(9, 115, dflowercenter6);


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