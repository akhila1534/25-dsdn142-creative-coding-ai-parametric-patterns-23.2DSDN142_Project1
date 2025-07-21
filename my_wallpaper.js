//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
let dpetal1 = 35
let dflowercenter1 = 30 
let dpetal2 = 25
let dflowercenter2 = 20
let dpetal3 = 28
let dflowercenter3 = 25

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(40, 90, 252); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);
//og d petal 35 

  noStroke(); // no outline 

  //FLOWER 1 
  //petals 
  fill(255, 133, 218)
  circle (50, 90, dpetal1)
  circle (60, 65, dpetal1)
  circle (90, 60, dpetal1)
  circle (105, 85, dpetal1)
  circle (95, 110, dpetal1)
  circle (70, 110, dpetal1)

  //center of flower
  fill(255, 245, 133)
  circle (80, 85, dflowercenter1) 

// FLOWER 2 
//petals 
fill(252, 150, 40)
circle (160, 10, dpetal2)
circle (140, 20, dpetal2)
circle (145, 40, dpetal2)
circle (165, 45, dpetal2)
circle (175, 26, dpetal2)

//center 
fill(137, 222, 84)
circle (157, 26, dflowercenter2)
 
//FLOWER 3 
//petals
fill (190, 74, 240)
circle (140, 155, dpetal3)
circle (152, 175, dpetal3)
circle (175, 175, dpetal3)
circle (185, 155, dpetal3)
circle (152, 135, dpetal3)
circle (172, 135, dpetal3)

//center 
fill (121, 239, 252)
circle (164, 155,dflowercenter3)



//circle (170, )
}
