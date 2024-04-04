// There should be only one instance for Singleton class
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Object.defineProperty(Singleton.prototype, "_value", {
        get: function () {
            return Singleton._value;
        },
        set: function (value) {
            Singleton._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
instance1._value = 100;
console.log(instance1._value);
console.log(instance2._value);
console.log(instance1 === instance2);
