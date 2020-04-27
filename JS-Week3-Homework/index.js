const pizzaPlace = "Joey's Pies";
let pizzaToppings = ["Sausage", "Pepperoni", "Jalapeno", "Bacon"];
let size = ["Small", "Medium", "Large"];
let crust = ["Thin", "Stuffed", "Garlic"];

let greetCustomer = function() {
  return `"Welcome to ${pizzaPlace}, our toppings are ${pizzaToppings}."`;
};
console.log(greetCustomer());

function getPizzaOrder(size, crust, toppings) {
  return `One ${size} ${crust} crust pizza with ${toppings}, and ${toppings} coming right up!`;
}
console.log(getPizzaOrder("large", "thin", "bacon"));

console.log(pizzaToppings.toppings);
function preparePizza(size, crust, toppings) {
  console.log(size + crust + pizzaToppings);
  return "...Cooking Pizza...";
}
console.log(preparePizza());
getPizzaOrder("large", "thin", "bacon");
