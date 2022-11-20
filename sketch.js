/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = floorPos_y

	canyon = {
		x_pos: width - 400,
		y_pos: height,
		width: 400,
		height: floorPos_y,
	}
	collectable = {
		x_pos: width / 2 + 70,
		y_pos: floorPos_y,
		size: 30,
	}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue
	clouds(150, 100)
	mountains(150, floorPos_y)
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width - canyon.width, height - floorPos_y); //draw some green ground
	drawCanyon(canyon.x_pos, canyon.y_pos, canyon.width, canyon.height)
	tree(treePos_x, treePos_y)
	drawcollactable(collectable.x_pos, collectable.y_pos, collectable.size)
	drawCharecter(gameChar_x, gameChar_y)
}

function mousePressed() {
	gameChar_x = mouseX
	gameChar_y = mouseY
}
