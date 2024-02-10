interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

let person: Person = {
  name: "Kevin",
  code: "01",
  charge: 1,
  description: "Developer",
  sayHello: () => `Hola soy ${name}`
};

let secondPerson: Person = {
  name: "Juan",
  code: 2,
  charge: 2,
  sayHello: () => `Hola soy ${name}`
};

console.log(person);
console.log(secondPerson.sayHello());


