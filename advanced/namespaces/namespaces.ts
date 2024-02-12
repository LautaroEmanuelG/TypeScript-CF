namespace DataBaseEntity {
    export class User {
        constructor(public name: string) {}
    }
    const myUser = new User('John');
    console.log(myUser);
    
}

const myOtherUser = new DataBaseEntity.User('Jane');
console.log(myOtherUser);

