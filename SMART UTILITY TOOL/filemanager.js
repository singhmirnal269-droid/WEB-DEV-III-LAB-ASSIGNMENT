// fileManager.js

const fs = require("fs");

const fileName = "test.txt";

// Create File
fs.writeFile(fileName, "Hello Node.js", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File Created");

    // Read File
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File Content:", data);

        // Update File
        fs.appendFile(fileName, "\nHello Updated", (err) => {
            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File Updated");

            // Read Updated File
            fs.readFile(fileName, "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated Content:", data);

                // Delete File
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});