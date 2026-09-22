const fs = require("fs");

const file = "data.txt";

// Create File
fs.writeFile(file, "Hello, this is my file.", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // Read File
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:", data);

        // Update File
        fs.appendFile(file, "\nThis is updated content.", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File updated successfully.");

            // Delete File
            fs.unlink(file, (err) => {
                if (err) {
                    console.log("Error deleting file:", err.message);
                    return;
                }

                console.log("File deleted successfully.");
            });
        });
    });
});