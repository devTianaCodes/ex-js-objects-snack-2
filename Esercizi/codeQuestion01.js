const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

//un ogetto, due reference pointer

console.log(hamburger.name); //Double Cheese Burger
console.log(secondBurger.name ); //Double Cheese Burger
console.log(hamburger.weight); //500
console.log(secondBurger.weight) //500
