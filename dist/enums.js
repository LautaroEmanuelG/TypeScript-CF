var Users;
(function (Users) {
    Users[Users["Admin"] = 0] = "Admin";
    Users[Users["PayUser"] = 1] = "PayUser";
    Users[Users["FreeUser"] = 2] = "FreeUser";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.Admin;
console.log(myUser);
