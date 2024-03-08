let Guest_ : string[] = ["Yousuf","Umar","Abdullah","Areeb"]
console.log("Great news! I found a bigger diner table!")
//Adding more Guests
Guest_.unshift("Moosa");
Guest_.splice(Guest_.length / 2,0, "Wajahat")
Guest_.push("Moin")

Guest_.forEach(Guest_=>{
    console.log(`Dear ${Guest_}, would you like to join me for dinner today`)
})