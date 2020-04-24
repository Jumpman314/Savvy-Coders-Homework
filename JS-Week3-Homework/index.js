const pizzaPlace = "Joey's Pies";
let pizzaToppings = ["Sausage", "Pepperoni", "Jalapeno", "Bacon"];
let size = ["Small", "Medium", "Large"];
let crust = ["Thin", "Stuffed", "Garlic Butter"];

let greetCustomer = function() {
  return `"Welcome to ${pizzaPlace}, our toppings are ${pizzaToppings}."`;
};
console.log(greetCustomer());

function getPizzaOrder(size, crust, pizzaToppings) {
  console.log(
    `One ${size} ${crust} crust pizza with ${pizzaToppings} coming right up!`
  );
}
console.log(getPizzaOrder);

for (let toppings of pizzaToppings) {
  console.log(toppings);
}

console.log(greetCustomer());
