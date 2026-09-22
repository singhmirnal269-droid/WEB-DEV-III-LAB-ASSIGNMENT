const fs = require("fs");
const http = require("http");

console.log("1. Program started");

// Track CLI inputs
console.log("2. CLI Inputs:", process.argv.slice(2));

// Synchronous operation
console.log("3. Before synchronous file read");

try {
    const data = fs.readFileSync("data.txt", "utf8");
    console.log("4. File read successfully:", data);
} catch (err) {
    console.log("4. File error:", err.message);
}

console.log("5. After synchronous file read");

// Asynchronous operation
console.log("6. Before asynchronous file read");

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log("8. Async file operation completed");

    if (err) {
        console.log("File error:", err.message);
    } else {
        console.log("File content:", data);
    }
});

console.log("7. After starting asynchronous operation");

// Server
const server = http.createServer((req, res) => {
    console.log("9. Server request received:", req.url);

    res.end("Hello from server");

    console.log("10. Response sent");
});

server.listen(3000, () => {
    console.log("11. Server running on port 3000");
});