// dice.js

const crypto = require("crypto");

function rollDice() {
    const randomNumber = crypto.randomInt(1, 7);
    return randomNumber;
}

console.log("Dice Rolled:", rollDice());

console.log("Multiple Dice Rolls:");

for (let i = 1; i <= 5; i++) {
    console.log(`Roll ${i}:`, rollDice());
}