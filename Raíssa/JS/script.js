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