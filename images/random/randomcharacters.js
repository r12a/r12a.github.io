var graphicsArray = new Array (
new Array ('/images/1594.png', 82, 150),
new Array ('/images/602.png', 135, 150),
new Array ('/images/8067.png', 80, 150),
new Array ('/images/1488.png', 121, 150),
new Array ('/images/2354.png', 143, 150),
new Array ('/images/2568.png', 146, 150),
new Array ('/images/3343.png', 189, 150),
new Array ('/images/3597.png', 107, 150),
new Array ('/images/11619.png', 127, 150),
new Array ('/images/4628.png', 174, 150),
new Array ('/images/26412.png', 155, 150),
new Array ('/images/4314.png', 159, 150) 
);
function chooseRandomPicture () {
	var picture = document.getElementById( 'level2-picture' );
	index = Math.floor(Math.random()*graphicsArray.length);
	picture.setAttribute( 'src', graphicsArray[index][0] );
	picture.setAttribute( 'width', graphicsArray[index][1] );
	picture.setAttribute( 'height', graphicsArray[index][2] );
	}