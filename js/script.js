function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
} 

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter A Number"));
const number2 = parseInt(prompt("Enter Another Number"));
const result = add(number1, number2);
alert(result + ", ");

const result2 = subtract(number1, number2);
alert(result2 + ", ");

const result3 = multiply(number1, number2);
alert(result3 + ", ");

const result4 = divide(number1, number2);
alert(result4);