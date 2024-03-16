"use strict";
function Make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
Make_shirt(); // Default large and message
Make_shirt("medium"); // Default message, medium size
Make_shirt("small", "Dive into Coding"); // Custom message, small size
