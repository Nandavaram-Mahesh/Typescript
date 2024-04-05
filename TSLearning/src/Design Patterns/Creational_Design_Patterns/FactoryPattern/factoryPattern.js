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
var NewCar = /** @class */ (function () {
    function NewCar(model, productionYear) {
        this.model = model;
        this.productionYear = productionYear;
    }
    return NewCar;
}());
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sedan.prototype.displayModelInfo = function () {
        console.log("The model of the car is:".concat(this.model, " , ProductionYear:").concat(this.productionYear));
    };
    return Sedan;
}(NewCar));
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    function Suv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suv.prototype.displayModelInfo = function () {
        console.log("The model of the car is:".concat(this.model, " , ProductionYear:").concat(this.productionYear));
    };
    return Suv;
}(NewCar));
var Hatchback = /** @class */ (function (_super) {
    __extends(Hatchback, _super);
    function Hatchback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hatchback.prototype.displayModelInfo = function () {
        console.log("The model of the car is:".concat(this.model, " , ProductionYear:").concat(this.productionYear));
    };
    return Hatchback;
}(NewCar));
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createCar = function (type, model, productionYear) {
        switch (type) {
            case "sedan":
                return new Sedan(model, productionYear);
            case "suv":
                return new Suv(model, productionYear);
            case "hatchback":
                return new Hatchback(model, productionYear);
        }
    };
    return CarFactory;
}());
var carFactory = new CarFactory();
var sedan = carFactory.createCar("sedan", "camry", 2024);
sedan.displayModelInfo();
