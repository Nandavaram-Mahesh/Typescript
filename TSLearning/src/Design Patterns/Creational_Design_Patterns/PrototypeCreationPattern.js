var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ConcretePrototype = /** @class */ (function () {
    function ConcretePrototype(User) {
        this.User = User;
    }
    ConcretePrototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.User = __assign({}, this.User);
        return clone;
    };
    ConcretePrototype.prototype.getUserDetails = function () {
        return this.User;
    };
    return ConcretePrototype;
}());
var user1 = new ConcretePrototype({
    name: "Mahesh",
    age: 27,
    email: "mahesh.nandavaram96@gmail.com"
});
var user2 = user1.clone();
console.log(user2.getUserDetails());
console.log(user1 === user2);
