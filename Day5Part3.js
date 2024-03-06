"use strict";
let Guest_list = ["Yousuf", "Umar", "Abdullah", "Areeb"];
let Unabletoattend = "Areeb";
console.log(`${Unabletoattend},can't make  it to dinner`);
let newguest = "Moosa";
Guest_list[Guest_list.indexOf(Unabletoattend)] = newguest;
Guest_list.forEach(Guest_list => {
    console.log(`Dear ${Guest_list},would you like to join me today for dinner`);
});
