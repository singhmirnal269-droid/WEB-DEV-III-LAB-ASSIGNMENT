// app.js
// Demonstrates reusing custom modules

const isEven = require('./modules/isEven');
const logMessage = require('./modules/logger');

logMessage("Starting app.js...");

const number = 10;

if (isEven(number)) {
    logMessage(`${number} is Even`);
} else {
    logMessage(`${number} is Odd`);
}

logMessage("App finished running.");