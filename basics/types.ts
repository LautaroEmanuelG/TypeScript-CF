let saludo : string = "Holas";
let age : number = 25;
let isAdult : boolean = true;
let anything : any = "Cualquier cosa";
let nothing : void = undefined;
let noth : null = null;
let undef : undefined = undefined;
let arr : number[] = [1,2,3,4,5];
let arr2 : Array<number> = [1,2,3,4,5];
let response : string | number = "Holiwis";


type respueta = number | undefined;
let res : respueta = 5;

//Type assertions
let message : any = "Hola";
(message as string).length;