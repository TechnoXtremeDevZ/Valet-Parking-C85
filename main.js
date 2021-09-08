canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car_width = 75;
var car_height = 100;
var bg_imgTag, car_imgTag;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var carX = 5;
var carY = 225;

function add() {
	bg_imgTag = new Image();
	bg_imgTag.onload = uploadbg;
	bg_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = uploadcar;
	car_imgTag.src = greencar_image;
}

function uploadbg() {
	ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
	ctx.drawImage(car_imgTag, carX, carY, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (carY > 10) {
		carY -= 10;

		uploadbg();
		uploadcar();
    }
}

function down()
{
	if (carY < 290) {
		carY += 10;

		uploadbg();
		uploadcar();
    }
}

function left()
{
	if (carX > 0) {
		carX -= 10;

		uploadbg();
		uploadcar();
    }
}

function right()
{
	if (carX < 725) {
		carX += 10;

		uploadbg();
		uploadcar();
    }
}
