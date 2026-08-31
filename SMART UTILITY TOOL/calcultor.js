// calculator.js
// CLI-based calculator using process.argv

const args = process.argv;

const operation = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

let result;

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please provide valid numbers.");
} else {
    switch (operation) {
        case "add":
            result = num1 + num2;
            console.log("Result:", result);
            break;

        case "subtract":
            result = num1 - num2;
            console.log("Result:", result);
            break;

        case "multiply":
            result = num1 * num2;
            console.log("Result:", result);
            break;

        case "divide":
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
            } else {
                result = num1 / num2;
                console.log("Result:", result);
            }
            break;

        default:
            console.log("Error: Invalid operation. Use add, subtract, multiply, or divide.");
    }
}