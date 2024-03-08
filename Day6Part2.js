"use strict";
let Guests = ["Yousuf", "Umar", "Abdullah", "Areeb"];
console.log("Unfortunately, I can only invite two people for Dinner.");
while (Guests.length > 2) {
    let removedGuests = Guests.pop();
    console.log(`sorry, ${removedGuests}, I cant invite you to dinner.`);
}
Guests.forEach(Guests => {
    console.log(`Dear ${Guests}, you are still invited to  dinner.`);
});
Guests.splice(0, Guests.length);
console.log(Guests);
