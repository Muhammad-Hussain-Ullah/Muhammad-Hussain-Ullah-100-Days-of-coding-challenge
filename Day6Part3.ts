let places : string[] = ["New Zealand","Iceland","Japan","Switzerland","Norway"];
console.log("Orignal order:",places)
console.log("Alphabetical order:",[...places].sort())
console.log("Reverse alphabetical order:",[...places].sort().reverse())
console.log("Orignal order;",places)
places.reverse();console.log("Orignal order:",places)
places.sort();console.log("Alphabetical order:",places)
places.reverse();console.log("Reverse alphabetical order:", places)