function getTriangleArea(a, h) {
	
	if (a<=0 || h <= 0) {
		console.log ("Nieprawićłowe dane");
	}
	else {
		return a*h/2;

	}	
	
}

var triangle1Area = getTriangleArea(2, 8);
var triangle2Area = getTriangleArea(4, 3);
var triangle3Area = getTriangleArea(5, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
