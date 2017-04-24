var add = function(number1, number2){return number1 + number2;};
var sub = function(number1, number2){return number1 - number2;};
var mul = function(number1, number2) {return number1 * number2;};
var div = function(number1, number2){return number1 / number2;};
var bmi = function(weight, height){return (weight*703 / (height * height));};
var C_to_F = function(temp){return (temp*1.8+32);};
var gal_to_lit = function(gal){return(gal*3.78541);};
/*var number1 = parseInt(prompt("enter a number"));
var number2 = parseInt(prompt("enter another number"));
var weight = parseInt(prompt("enter your weight in lbs"));
var height = parseInt(prompt("enter your height in inches"));*/
var gal = parseInt(prompt("enter a volume in gallon"));
var result = gal_to_lit(gal);

alert(result);
