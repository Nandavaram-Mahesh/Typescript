var indianPopularPerson = {
    name: 'Mahesh',
    followers: 2000000000000000,
    field: "software Engineer"
};
// Generic Interfaces
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["honda"] = "honda";
    AutomobileBrands["bmw"] = "bmw";
    AutomobileBrands["toyota"] = "toyota";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["white"] = "white";
    AutomobileColors["black"] = "black";
    AutomobileColors["silver"] = "silver";
})(AutomobileColors || (AutomobileColors = {}));
var ferrari = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a ferrari"
};
var honda = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: "This is a Honda"
};
var toyota = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [6676, 97897],
    description: "This is a Toyota"
};
console.log(ferrari);
console.log(honda);
console.log(toyota);
//    Interface with classes
var Car = /** @class */ (function () {
    function Car(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = "car";
    }
    return Car;
}());
var ferrariCar = new Car(AutomobileBrands.ferrari, [AutomobileColors.black, AutomobileColors.red], "This is Ferrari");
console.log(ferrariCar);
var Truck = /** @class */ (function () {
    function Truck(brand, colors, description, capacity, licenseRenewalDate) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
        this.type = "Truck";
    }
    return Truck;
}());
var toyotaTruck = new Truck(AutomobileBrands.toyota, [AutomobileColors.silver, AutomobileColors.black, AutomobileColors.red, AutomobileColors.blue], "This is toyota Truck", 50000, new Date());
console.log(toyotaTruck);
