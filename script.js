"use strict";

(function(){
	document.getElementById("responsiveNav").addEventListener(
	"click", function(){responsivMeny()});
	
	var previous =  document.getElementById("previousPicture")
	if(previous != null){
		previous.addEventListener(
		"click", function(){changePicture(-1)});	
	}
	
	var next = document.getElementById("nextPicture")
	if(next != null){
		next.addEventListener(
		"click", function(){changePicture(1)});	
	}
	
	// document.getElementById("resetPicture").addEventListener(
	// "click", function(){changePicture(0)});
	
	var pictures = document.getElementsByClassName("picture-gallery-picture");
	if(pictures[0] != null){
		pictures[0].classList.add("picture-display-right");
	}

	var hide = document.getElementsByClassName("javascript-hide");
	if(hide != null){
		for(var i = 0; i < hide.length; i++){
			hide[i].classList.add("javascript-hidden");
		}
	}
})();

function responsivMeny() {
	var x = document.getElementById("topnav-ul");
	var y = document.getElementById("menyText");
	if (!x.classList.contains("dropdown")) {
		x.classList.add("dropdown");
		y.classList.add("hidden");
	} else {
		x.classList.remove("dropdown");
		y.classList.remove("hidden");
	}
}

function changePicture (direction = 0){
	var pictures = document.getElementsByClassName("picture-gallery-picture");
	var pictureText = document.getElementsByClassName("picture-gallery-text");
	var number;
	
	//Walks through the pictures and removes old picture-fade and -left
	//adds picture-fade on current displayed picture
	for(var i = 0; i < pictures.length; i++){
		if(pictures[i].classList.contains("picture-display-right")
			||pictures[i].classList.contains("picture-display-left")){
				
			if(direction != 0){
				number = i + direction;
			}else{
				number = 0;
			}
			pictures[i].classList.add("picture-fade");
		}else{
			pictures[i].classList.remove("picture-fade");
		}
		pictures[i].classList.remove("picture-left");
	}
	
	//Make you loop around on reaching the end, and gives a default value
	if(number == null){
		number = 0;
	}else if(number >= pictures.length){
		number = 0;
	}else if(number < 0){
		number = pictures.length - 1;
	}
	
	//Removes the old displayed picture
	for(var i = 0; i < pictures.length; i++){
		pictures[i].classList.remove("picture-display-right", "picture-display-left");
	}
	
	//Changes the text to fit the image
	for(var i = 0; i < pictureText.length; i++) {
		if(i == number){
			pictureText[i].classList.remove("javascript-hidden");
		}else{
			pictureText[i].classList.add("javascript-hidden");
		}
		
	}
	
	//Positions and starts the animation, dependent on the direction
	if(direction < 0){
		pictures[number].classList.add("picture-left", "picture-display-left");
	}else{
		pictures[number].classList.add("picture-display-right");
	}
}




