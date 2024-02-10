var person = {
    name: "Kevin",
    code: "01",
    charge: 1,
    description: "Developer",
    sayHello: function () { return "Hola soy ".concat(name); }
};
var secondPerson = {
    name: "Juan",
    code: 2,
    charge: 2,
    sayHello: function () { return "Hola soy ".concat(name); }
};
console.log(person);
console.log(secondPerson.sayHello());
