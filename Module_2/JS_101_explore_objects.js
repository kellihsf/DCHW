const kelli = {
    fullName: "Kelli Stone",
    age: 37,
    faveColor: "orange",
    likesPizza: true,
}

const colorProp = kelli.faveColor;
console.log(colorProp);

kelli.fullName = "Stone";
console.log(kelli.fullName);

delete kelli.likesPizza;
console.log(kelli);

kelli.likesCookies = true;
console.log(kelli);



