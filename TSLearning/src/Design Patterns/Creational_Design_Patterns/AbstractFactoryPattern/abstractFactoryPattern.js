var ProductA = /** @class */ (function () {
    function ProductA() {
    }
    ProductA.prototype.operationA = function () {
        return "Performing operation on ProductA";
    };
    return ProductA;
}());
var ProductB = /** @class */ (function () {
    function ProductB() {
    }
    ProductB.prototype.operationB = function () {
        return "Performing operation on ProductB";
    };
    ProductB.prototype.combinedOperation = function (collaborator) {
        return "Performing operation on ProductB with ".concat(collaborator.operationA());
    };
    return ProductB;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.createProductA = function () {
        return new ProductA();
    };
    Factory.prototype.createProductB = function () {
        return new ProductB;
    };
    return Factory;
}());
var factory = new Factory();
var productA = factory.createProductA();
console.log(productA.operationA());
var productB = factory.createProductB();
console.log(productB.operationB());
console.log(productB.combinedOperation(productA));
