class Animal {
    public name: "Generic animal";
    private age=0;
    protected identity= "111";

    sayHi() {
        return 'Grrr!'
    }

    constructor() {

    }
}

class Dog extends Animal {
    type: "Pastor Alemán";

    sayHi() {
        return 'Woof! Woof!';
    }

    constructor() {
        super();
        this.type = "Pastor Alemán";
    }
}

const miAnimal = new Animal();
console.log(miAnimal.sayHi());

const miPerro = new Dog();
console.log(miPerro.sayHi());
console.log(miPerro.name);
miPerro.type
