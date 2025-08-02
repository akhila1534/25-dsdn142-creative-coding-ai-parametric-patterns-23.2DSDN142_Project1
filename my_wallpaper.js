//your parameter variables go here!

let rect_width  = 20;
let rect_height = 30;

let dpetal1 = 80
let dflowercenter1 = 60

let dpetal2 = 50
let dflowercenter2 = 30

let dpetal3 = 70
let dflowercenter3 = 40

let dpetal4 = 40
let dflowercenter4 = 20

let dpetal5 = 30
let dflowercenter5 = 20

let dpetal6 = 30
let dflowercenter6 = 20

let rectangleX = 0
let rectangleW = 200
let rectangleH = 30

let switcher = false;
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(214,255,238); //light honeydew green colour


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

function rectangle() {
  noStroke();
  fill (242, 202, 252)
  rect (rectangleX, 10, rectangleW, rectangleH)
  rect (rectangleX, 60, rectangleW, rectangleH)
  rect (rectangleX, 110, rectangleW, rectangleH)
  rect (rectangleX, 160, rectangleW, rectangleH)


}
