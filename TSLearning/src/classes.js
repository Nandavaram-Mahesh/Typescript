var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SuccessfullPerson = /** @class */ (function () {
    function SuccessfullPerson(name, email) {
        this.name = name;
        this.email = email;
    }
    SuccessfullPerson.prototype.greet = function () {
        return "Welcome ".concat(this.name);
    };
    SuccessfullPerson.prototype.getNameNdEmailId = function () {
        return [this.name, this.email];
    };
    return SuccessfullPerson;
}());
var person3 = new SuccessfullPerson('Mahesh', 'mahesh.nandavaram96@gmail.com');
var person4 = new SuccessfullPerson('Claudia', 'claudia.richardxx@gmail.com');
console.log(person3.greet());
console.log(person4.greet());
console.log(person3.getNameNdEmailId());
// Inheritance
/*
class User {
    private name: string;
    protected email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class AdminUser extends User {

    isAdmin: boolean = true;
    usersReporting: number;

    constructor(
        name: string,
        email: string,
        age: number,
        usersReporting: number
    ) {
        super(name, email, age);
        this.usersReporting = usersReporting;
    }
}

const user: User = new User("John", "john@email.com", 32);
const admin: AdminUser = new AdminUser("Mark", "mark@email.com", 34, 5);

console.log(user);
console.log(admin);
 */
// shorthand Syntax
var User = /** @class */ (function () {
    function User(userName, email, age) {
        this.userName = userName;
        this.email = email;
        this.age = age;
    }
    return User;
}());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(userName, email, age, usersReporting) {
        var _this = _super.call(this, userName, email, age) || this;
        _this.usersReporting = usersReporting;
        _this.isAdmin = true;
        return _this;
    }
    return AdminUser;
}(User));
var user = new User("John", "john@email.com", 32);
var admin = new AdminUser("Mark", "mark@email.com", 34, 5);
console.log(user);
console.log(admin);
// Accessors and Mutators (getters/setters) 
var DecentPerson = /** @class */ (function () {
    function DecentPerson(name) {
        this.name = name;
    }
    Object.defineProperty(DecentPerson.prototype, "age", {
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age not defined");
            }
            return this._age;
        },
        set: function (age) {
            if (age > 200 || age < 0) {
                throw new Error("Enter a valid Age");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return DecentPerson;
}());
var decentPerson1 = new DecentPerson("mahesh");
decentPerson1.age = 27;
console.log(decentPerson1);
