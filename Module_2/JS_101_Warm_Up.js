let myName = "Kelli"
console.log(myName + " is cool.")

let date = new Date()
let todaysDate = date.getDate();
let daysUntilChristmas = 25 - todaysDate
console.log(daysUntilChristmas); 
console.log(`${daysUntilChristmas}` + " Days until Christmas");

let today = new Date()
const frontTeeth = "my two front teeth"
console.log(`All I want for Christmas is ${frontTeeth}`)

function decemberCountdown(date, today){
    return date - today;
}
console.log(decemberCountdown);

let daysUntilNewYearsEve = 31 - todaysDate;
console.log(daysUntilNewYearsEve);
