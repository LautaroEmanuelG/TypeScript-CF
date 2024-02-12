//Generics me permite tener un tipo de dato dinamico, es decir, que no se define hasta que se usa.
// Es muy util para reutilizar codigo y para trabajar con tipos de datos dinamicos.


interface myInterface<T> {
    field: T;
}

const myValue : myInterface<string> = {
    field: "aa"
};

class Myclass<T> {
    field: T;

    constructor(field: T) {
        this.field = field;
    }
}

const myObject = new Myclass<string>("aa");

function getData<T>(id:string): Promise<T>|void{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => data as T);
}

//Example

interface UserResponse {
    id: number;
    name: string;
    email: string;
}

class HttpResponse<T> {
    data: T;
    status: number;

    constructor(data: T, status: number) {
        this.data = data;
        this.status = status;
    }
}

const fetchUser = ():UserResponse => {
    return {
        id: 1,
        name: "John",
        email: "alsdk"
    }
}

const myUser = fetchUser();
const res = new HttpResponse<UserResponse>(myUser, 200);
console.log(res.data, res.status);

//Example 2
//Muchas listas

class CRUD<T> {
    private items:T[];

    constructor(items: T[]) {
        this.items = items;
    }

    addItem(item: T): void {
        this.items.push(item);
    }

    removeLastItem(): void {
        this.items.pop();
    }

    printItems(): void {
        console.log(this.items);
    }
}

const users :  UserResponse[] = [
    {id:1, name: "John", email: "alsdk"},
    {id:2, name: "John2", email: "alsdk2"},
    {id:3, name: "John3", email: "alsdk1"},
]
const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({id:4, name: "John4", email: "alsdk4"});
console.log(userCRUD.printItems());
