canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
    if((keyPressed >=65 && keyPressed<=90)||(keyPressed >=97 && keyPressed<=122))
	{
	     aplhabetkey();
		 document.getElementById("d1").innerHTML="You pressed a Alphabet Key";
	}
	else if((keyPressed >=48 && keyPressed <=57))
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed a Number Key";
	}
	else if((keyPressed >=37 && keyPressed<=40))
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed a Arrow Key";
	}
	else if((keyPressed = 17))
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed a Special Key";
	}
	else if((keyPressed = 18))
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed a Special Key";
	}
	else if((keyPressed = 27))
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed a Special Key";
	}
	else if((keyPressed ==45 || keyPressed ==12 || keyPressed ==35 || keyPressed ==33 || keyPressed ==34 || keyPressed ==35|| keyPressed ==36 || keyPressed ==38 || keyPressed == 39 || keyPressed == 40 ||  keyPressed ==45))
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed a Number Key";
	}
	else
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}

}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
