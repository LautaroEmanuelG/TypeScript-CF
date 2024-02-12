//Generics me permite tener un tipo de dato dinamico, es decir, que no se define hasta que se usa.
// Es muy util para reutilizar codigo y para trabajar con tipos de datos dinamicos.
var myValue = {
    field: "aa"
};
var Myclass = /** @class */ (function () {
    function Myclass(field) {
        this.field = field;
    }
    return Myclass;
}());
var myObject = new Myclass("aa");
function getData(id) {
    return fetch("https://jsonplaceholder.typicode.com/posts/".concat(id))
        .then(function (response) { return response.json(); })
        .then(function (data) { return data; });
}
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status) {
        this.data = data;
        this.status = status;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "John",
        email: "alsdk"
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200);
console.log(res.data, res.status);
//Example 2
//Muchas listas
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        console.log(this.items);
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "John", email: "alsdk" },
    { id: 2, name: "John2", email: "alsdk2" },
    { id: 3, name: "John3", email: "alsdk1" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "John4", email: "alsdk4" });
console.log(userCRUD.printItems());
