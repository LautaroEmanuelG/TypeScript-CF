type Persona = {
    name:string;
    code:string | number;
    description?:string;
}

const newPerson: Persona = {
    code: 2,
    name: "Kevin",
}

type ServiceResponse = string | number | boolean;
let response: ServiceResponse = "Hello";

type UserCharges = "admin" | "user" | "guest";
let user: UserCharges = "admin";

type servicio = "api" | "web" | "db";