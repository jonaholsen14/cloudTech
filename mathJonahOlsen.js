// Function to parse and perform math operations
function calculate(input) {
// Split the input string into an array of words
const parts = input.split(" ");

// Extract the operation and operands
const operation = parts[0].toUpperCase();
const operand1 = parseFloat(parts[1]);
const operand2 = parseFloat(parts[2]);

// Perform the corresponding operation
switch (operation) {
    case "ADD":
        return operand1 + operand2;
    case "SUBTRACT":
        return operand1 - operand2;
    case "MULTIPLY":
        return operand1 * operand2;
    case "DIVIDE":
        return operand1 / operand2;
    default:
        return "Invalid operation";
}
}

// Prompt the user for input
const userInput = prompt("Enter a math operation (e.g., ADD 2 2):");
const result = calculate(userInput);
console.log(`Result: ${result}`);
alert(`Result: ${result}`);
