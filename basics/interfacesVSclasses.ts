interface PersonInterface {
    nombre: string;
    apellido: string;
    edad: number;
    imprimir?(): void;
    sayHello:() => string;
}

class PersonClass {
    sayHello = () => {
        fetch('http://localhost:3000')
        return "Hello";
    }
}

const personOne: PersonInterface = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    sayHello: () => "Hello"
}

const personTwo: PersonClass = new PersonClass();

interface PetInterface {
    sayHello: () => string;
}

class PetClass {
    sayHello = () => "Hello";
}

class Dog implements PetInterface {
    sayHello = () => "HelloDesdeDog";
}

class Cat extends PetClass {
}