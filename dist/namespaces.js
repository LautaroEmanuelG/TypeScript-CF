var DataBaseEntity;
(function (DataBaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DataBaseEntity.User = User;
    var myUser = new User('John');
    console.log(myUser);
})(DataBaseEntity || (DataBaseEntity = {}));
var myOtherUser = new DataBaseEntity.User('Jane');
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser1 = new DataBaseEntity.User('Jane2');
console.log(myOtherUser1);
