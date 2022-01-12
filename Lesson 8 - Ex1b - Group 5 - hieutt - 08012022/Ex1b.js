const operator = prompt('Enter operator ( either +, -, * or / ): ');
let num1 = parseInt(prompt("Enter number 1: "));
let num2 = parseInt(prompt("Enter number 2: "));
let result;
switch (operator) {
    case "+": 
        result = num1 + num2;
        break;

    case "-": 
        result = num1 - num2;
        break;

    case "*": 
        result = num1 * num2;
        break;

    case "/": 
        result = parseFloat(num1 / num2);
        break;
};
document.getElementById("result-view").innerHTML = `Phép tính của bạn là: ${num1} ${operator} ${num2} = ${result}`;
<<<<<<< HEAD
console.log(`${num1} ${operator} ${num2} = ${result}`);
=======
console.log(`${num1} ${operator} ${num2} = ${result}`);
>>>>>>> 5c25efd27aae4358602d97d1de7d06b9c5b14083
