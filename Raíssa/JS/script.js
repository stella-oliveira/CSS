// ANTES E DEPOIS SLIDER

	// UM
	var divisor = document.getElementById("divisor");
	var comparisonWidth = document.getElementById("comparison").clientWidth;

	function moveDivisor(e) {
	 divisor.style.width = (e.offsetX * 100 / comparisonWidth) + "%";
	}

	// DOIS
	var divisor2 = document.getElementById("divisor2");
	var comparison2Width = document.getElementById("comparison2").clientWidth;

	function moveDivisor2(e2) {
	 divisor2.style.width = (e2.offsetX * 100 / comparison2Width) + "%";
	}

	
// CARROSSEL DE IMAGENS
var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 3000); // Change image every 3 seconds
}

/*
// EFEITO PARALLAX SCROLL
	window.addEventListener("scroll", function() {
		const distance = window.scrollY;
		document.querySelector("header").style.transform = `translateY(${distance *
		1}px)`;
		document.querySelector(
		".container"
		).style.transform = `translateY(${distance * 0.3}px)`;
		setTimeout(() => {
   		//	document.querySelector("section h3").classList.add("animate-me");
  		}, 400);
	});

*/