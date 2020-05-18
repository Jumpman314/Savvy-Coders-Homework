class Person {
  constructor(name, age, homeTown, hobby) {
    this.name = name;
    this.age = age;
    this.homeTown = homeTown;
    this.hobby = hobby;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  setHomeTown(homeTown) {
    this.homeTown = homeTown;
  }
  setHobby(hobby) {
    this.hobby = hobby;
  }
  getGreeting() {
    return `Hello, my name is ${this.name}. I'm ${this.age} years old and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby}.`;
  }
}
class Man extends Person {
  constructor(name, age, homeTown, hobby, gender = "male") {
    super(name, age, homeTown, hobby);
    this.gender = gender;
  }
  getMansGreeting() {
    return `Hello, my name is ${this.name}. I'm a ${this.age} year old ${this.gender} and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby}.`;
  }
}
class Woman extends Person {
  constructor(name, age, homeTown, hobby, gender, favFood = "Chinese") {
    super(name, age, homeTown, hobby, gender);
    this.favFood = favFood;
  }
  setFavFood(favFood) {
    this.favFood = favFood;
  }
  setGender(gender) {
    this.gender = gender;
  }
  getWomansGreeting() {
    return `Hello, my name is ${this.name}. I'm a ${this.age} year old ${this.gender} and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby} and my favorite type of food is ${this.favFood}.`;
  }
}
const joseph = new Man("Joseph", 27, "St. Louis", "Skateboarding");
const holly = new Woman("Holly", 29, "St. Louis", "Baking");
console.log(joseph.setAge(24));
console.log(joseph.getMansGreeting());
console.log(holly.setGender("female"));
console.log(holly.getWomansGreeting());
