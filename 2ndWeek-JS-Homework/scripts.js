let pizzaPlace = "Joey's Pies";

let numberOfToppings = 10;
console.log("typeof pizzaPlace", typeof pizzaPlace);
console.log("typeof numberOfToppings", typeof numberOfToppings);

let tL = `"The name of the joint is ${pizzaPlace}, and they have a ${numberOfToppings} topping pizza!"`;
console.log(tL);

if (numberOfToppings <= 9) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (numberOfToppings = 1; numberOfToppings <= 10; numberOfToppings++) {
  if (numberOfToppings === 0) {
    console.log(numberOfToppings);
  } else if (numberOfToppings % 2) {
  } else {
    console.log(numberOfToppings);
  }
}
