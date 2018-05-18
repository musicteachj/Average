var num = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue;

document.getElementById('numberC').innerHTML = num;

document.getElementById('btn').addEventListener("click", function() {
	var newValue = document.getElementById('input').value;

	document.getElementById('input').value = "";

	var numT = parseInt(newValue);
	num.push(numT)

	document.getElementById('numberC').innerHTML = num;

	var numAdd = num.reduce(reducer);

	var average = numAdd / num.length;

	console.log(average);

	document.getElementById('averageC').innerHTML = average.toFixed(1);
	
});



	
