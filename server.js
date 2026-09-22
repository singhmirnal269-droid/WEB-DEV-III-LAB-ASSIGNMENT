const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.end("Welcome message");
    }
    else if (req.url === "/about") {
        res.end("About page");
    }
    else if (req.url === "/contact") {
        res.end("Contact page");
    }
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});