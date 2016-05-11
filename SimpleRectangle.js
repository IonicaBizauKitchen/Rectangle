var rect={
perimeter: function (x,y){
	return (2*(x+y));
	},
area: function (x,y){
	return (x*y);
	}
};
 function solveRect(l,b){
 	console.log("solving for rectangle with l="+ l+ "and b="+ b);
 	if(l<0 || b<0){
 		console.log("Ractangle dimensions should be greater than zero: l="+ l+ "and b="+b);
 	}
 	else{
 		console.log("The rectangle with l="+l+ "and b="+b+ "has the area="+ rect.area(l,b));
 		console.log("The rectangle with l="+l+ "and b="+b+ "has the area="+ rect.perimeter(l,b));
 	}
 }
 solveRect(2,4);
 solveRect(1,-2);
 solveRect(7,13);