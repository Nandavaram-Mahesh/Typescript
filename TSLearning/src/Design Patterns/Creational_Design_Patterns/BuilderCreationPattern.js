// This pattern is used to build complex objects step by step
var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    Product.prototype.addPart = function (part) {
        this.parts.push(part);
    };
    Product.prototype.listParts = function () {
        console.log("Product Parts:".concat(this.parts.join(', ')));
    };
    return Product;
}());
var ConcreteBuilder = /** @class */ (function () {
    // when ever this ConcreteBuilder is instantiated we make sure that product is set to default 
    function ConcreteBuilder() {
        this.reset();
    }
    ConcreteBuilder.prototype.reset = function () {
        this.product = new Product();
    };
    ConcreteBuilder.prototype.setPartA = function () {
        this.product.addPart("Add PartA");
    };
    ConcreteBuilder.prototype.setPartB = function () {
        this.product.addPart("Add PartB");
    };
    ConcreteBuilder.prototype.setPartC = function () {
        this.product.addPart("Add PartC");
    };
    ConcreteBuilder.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this._builder = builder;
    };
    Director.prototype.buildMinimumProduct = function () {
        this._builder.setPartA();
    };
    Director.prototype.buildFullProduct = function () {
        this._builder.setPartA();
        this._builder.setPartB();
        this._builder.setPartC();
    };
    return Director;
}());
var builder = new ConcreteBuilder();
var director = new Director();
director.setBuilder(builder);
director.buildMinimumProduct();
var newProduct = builder.getProduct();
console.log(newProduct);
