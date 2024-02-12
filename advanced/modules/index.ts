import { PI, User, generateRandomId } from "./utils.modules";

const myNumber = 10 * PI;

const myUser: User = {
    name: 'John',
    age: 30,
    id: generateRandomId()
}

console.log(myNumber, myUser);
