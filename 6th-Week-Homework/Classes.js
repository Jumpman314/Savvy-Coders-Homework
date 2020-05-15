class Person {
  constructor(name, age, homeTown, hobby) {
    this.name = name;
    this.age = age;
    this.homeTown = homeTown;
    this.hobby = hobby;
  }
  greeting() {
    return `Hello, my name is ${this.name}. I'm ${this.age} years old and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby}.`;
  }
}

class Man extends Person {
  constructor(name, age, homeTown, hobby) {
    super("Joseph", 27, "St. Louis", "Skateboarding");
    this.name = name;
    this.age = age;
    this.homeTown = homeTown;
    this.hobby = hobby;
  }
  greeting1() {
    return `Hello, my name is ${this.name}. I'm ${this.age} years old and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby}.`;
  }
}

class Woman extends Person {
  constructor(name, age, homeTown, hobby) {
    super("Holly", 29, "St. Louis", "Baking");
    this.name = name;
    this.age = age;
    this.homeTown = homeTown;
    this.hobby = hobby;
  }
  greeting2() {
    return `Hello, my name is ${this.name}. I'm ${this.age} years old and I'm from ${this.homeTown}. My favorite hobby is ${this.hobby}.`;
  }
}

const joseph = new Man("Joseph", 27, "St. Louis", "Skateboarding");
const holly = new Woman("Holly", 29, "St. Louis", "Baking");
console.log(joseph.greeting1());
console.log(holly.greeting2());
