/* My Solution
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
getPizzaOrder("large", "thin", "bacon");*/

/*
// Brandon's Solution
// 1. Create an array of `pizzaToppings` with at least four different toppings
const pizzaPlace = "Joey's Pies";
const pizzaToppings = ["Sausage", "Pepperoni", "Jalapeno", "Bacon"];

// 2. Create a `greetCustomer` function that prints a message that welcomes a guest, then informs them of the available toppings by looping over `pizzaToppings` (don't worry about perfect grammar here yet, i.e. "a, b, _and_ c", see Bonus Challenge #9)
function greetCustomer(pizzaPlace, pizzaToppings) {
  console.log(`Welcome to ${pizzaPlace}, our toppings are ${pizzaToppings}.`);
}

// 3. Create a `getPizzaOrder` function that
//    - accepts a size, crust, and an indefinite amount of toppings as inputs
//    - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//    - outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  let pizza = [];
  console.log(
    `One ${size} ${crust} crust pizza with ${toppings}, coming right up!`
  );
  pizza.push(size, crust, ...toppings);
  return pizza;
}
//My sanity check to see if the toppings works. They do.
// const pizza = getPizzaOrder('large', 'thin', "Sausage", "Pepperoni", "Jalapeno", "Bacon")

// 4. Create a `preparePizza` function that
//    - accepts an array with three items: a size, a crust, and a list of toppings
//    - prints something like "...Cooking pizza..."
//    - outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza(pizza) {
  console.log("...cooking pizza...");
  let pizzaObj = {
    size: pizza[0],
    crust: pizza[1]
  };
  let toppings = [];
  for (let i = 2; i < pizza.length; i++) {
    toppings.push(pizza[i]);
    pizzaObj["toppings"] = toppings;
  }
  return pizzaObj;
}

// 5. Create a `servePizza` function that
//    - accepts a pizza Object
//    - logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//    - outputs the same pizza Object that was passed in
function servePizza(pizzaObj) {
  console.log(
    `Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} crust pizza with ${pizzaObj.toppings} ... Enjoy!`
  );
}
// 6. Call each function and (starting with `preparePizza`) use the returned value from the previous function as its input
greetCustomer();
const pizza = getPizzaOrder(
  "large",
  "thin",
  "Sausage",
  "Pepperoni",
  "Jalapeno",
  "Bacon"
);
const pizzaObj = preparePizza(pizza);
servePizza(pizzaObj);
*/

// Martin's Solution
// BASIC SOLUTION
const pizzaToppings = ["pepperoni", "sausage", "onions", "peppers"];
function greetCustomer() {
  let greeting = `Welcome to The Pizza House, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}coming up!`);
  return [size, crust, toppings];
}
function preparePizza([size, crust, toppings]) {
  console.log("...your pizza is cooking...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}Enjoy!`);
  return pizza;
}
greetCustomer();
servePizza(
  preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers"))
);
// BONUS SOLUTIONS
// #9
function addListElementsToString(string, list) {
  for (let i = 0; i < list.length; i++) {
    // if only one topping ordered
    if (list.length === 1) {
      string += `${list[i]}. `;
    } else if (i === list.length - 1) {
      // if more than one topping ordered and current topping is last in list
      string += `and ${list[i]}. `;
    } else {
      // if more than one topping ordered and current topping is NOT last in array
      string += `${list[i]}, `;
    }
  }
  return string;
}
// #10
function checkForToppings(toppings) {
  if (!toppings[0]) {
    return false;
  }
  return true;
}
function getPizzaOrderAndCheckForPlain(size, crust, ...toppings) {
  if (checkForToppings(toppings)) {
    let order = `One ${size} ${crust} crust pizza with `;
    order = addListElementsToString(order, toppings);
    console.log(`${order}coming up!`);
    return [size, crust, toppings];
  }
  console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
  return [size, crust, toppings];
}
// #11
function checkOrderedToppings(orderedToppings, availableToppings) {
  for (let ordered of orderedToppings) {
    let toppingAvailable = false;
    for (let available of availableToppings) {
      if (ordered === available) {
        toppingAvailable = true;
      }
    }
    if (toppingAvailable) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
function getPizzaOrderAndCheckForToppingAvailability(size, crust, ...toppings) {
  if (checkForToppings(toppings)) {
    if (checkOrderedToppings(toppings, pizzaToppings)) {
      let order = `One ${size} ${crust} crust pizza with `;
      order = addListElementsToString(order, toppings);
      console.log(`${order}coming up!`);
      return [size, crust, toppings];
    }
    let wrongToppingMessage =
      "I'm sorry, one or more of the toppings you ordered is unavailable. Our toppings are: ";
    wrongToppingMessage = addListElementsToString(
      wrongToppingMessage,
      pizzaToppings
    );
    console.log(`${wrongToppingMessage}Please order again.`);
    return false;
  }
  console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
  return [size, crust, toppings];
}
