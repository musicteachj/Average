var num = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var newValue = "";

document.getElementById('numberC').innerHTML = num;

var btnOne = document.getElementById('btn').innerHTML;
var btnTwo = document.getElementById('btnTwo').innerHTML;

var btnOne = btnOne.toUpperCase();
var btnTwo = btnTwo.toUpperCase();

document.getElementById('btn').innerHTML = btnOne;
document.getElementById('btnTwo').innerHTML = btnTwo;



document.getElementById('btn').addEventListener("click", function() {
	var newValue = document.getElementById('input').value;

	if (newValue === "") {
		alert("Please enter a number");
	} else {
			document.getElementById('input').value = "";

	var numT = parseInt(newValue);
	num.push(numT)

	document.getElementById('numberC').innerHTML = num;

	var numAdd = num.reduce(reducer);

	var average = numAdd / num.length;

	document.getElementById('averageC').innerHTML = average.toFixed(1);
	}


	
});
;
document.getElementById('btnTwo').addEventListener("click", function() {
	reset();
});

function reset() {
		num = [];
	document.getElementById('input').value = "";
	document.getElementById('numberC').innerHTML = "";
	document.getElementById('averageC').innerHTML = "";
}

	
