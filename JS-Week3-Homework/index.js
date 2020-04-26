const pizzaPlace = "Joey's Pies";
let pizzaToppings = ["Sausage", "Pepperoni", "Jalapeno", "Bacon"];
let pizzaSize = ["Small", "Medium", "Large"];
let pizzaCrust = ["Thin", "Stuffed", "Garlic"];

let greetCustomer = function() {
  return `"Welcome to ${pizzaPlace}, our toppings are ${pizzaToppings}."`;
};
console.log(greetCustomer());

let obj = {
  toppings: ["Sausage", "Pepperoni", "Jalapeno", "Bacon"],
  size: ["Small", "Medium", "Large"],
  crust: ["Thin", "Stuffed", "Garlic"]
};

function getPizzaOrder() {
  return `One ${obj.size[1]} ${obj.crust[1]} crust pizza with ${obj.toppings[3]}, and ${obj.toppings[2]} coming right up!`;
}
console.log(getPizzaOrder());
console.log(obj);

function preparePizza(size, crust, toppings) {
  console.log(obj.size[1] + obj.crust[1] + obj.toppings[3]);
  return "...Cooking Pizza...";
}
console.log(preparePizza());
