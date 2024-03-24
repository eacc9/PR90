canvas = document.getElementById('myCanvas');
/*
Corrige el nombre de la función y usa un contexto 2d
*/
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
	background_imgTag = new Image(); //Define la variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // Define una función para cargar esta variable
	background_imgTag.src = background_image;   // Carga la imagen

	car1_imgTag = new Image(); //Define la variable con una nueva imagen
	/*
	Carga el auto correcto
	*/
	car1_imgTag.onload = uploadcar1; // Define una función para cargar esta variable
	/*
	Asigna la variable car_image correcta.
	*/
	car1_imgTag.src = car1_image;   // Carga la imagen

	car2_imgTag = new Image(); //Define la variable con una nueva imagen
	car2_imgTag.onload = uploadcar2; // Define una función para cargar esta variable
	car2_imgTag.src = car2_image;   // Carga la imagen
}

function uploadBackground() {
	/*
	Corrige los nombres de la función
	*/
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	/*
	Corrige los nombres de la función
	*/
	cTx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	/*
	Corrige los nombres de la función
	*/
	ctx.DrawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("tecla de flecha arriba");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("tecla de flecha abajoo");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("tecla de flecha izquierda");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("tecla de flecha derecha");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("tecla w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("tecla s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("tecla a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("tecla d");
		}
}