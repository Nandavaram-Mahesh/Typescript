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
var Shapes = /** @class */ (function () {
    function Shapes(properties) {
        this.properties = properties;
    }
    return Shapes;
}());
var Rectangles = /** @class */ (function (_super) {
    __extends(Rectangles, _super);
    function Rectangles(properties, width, length) {
        var _this = _super.call(this, properties) || this;
        _this.properties = properties;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangles.prototype.clone = function () {
        var clonedProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        };
        return new Rectangles(clonedProperties, this.width, this.length);
    };
    return Rectangles;
}(Shapes));
var Circles = /** @class */ (function (_super) {
    __extends(Circles, _super);
    function Circles(properties, radius) {
        var _this = _super.call(this, properties) || this;
        _this.properties = properties;
        _this.radius = radius;
        return _this;
    }
    Circles.prototype.clone = function () {
        var clonedProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        };
        return new Circles(clonedProperties, this.radius);
    };
    return Circles;
}(Shapes));
var rectangle1 = new Rectangles({
    color: "red",
    x: 10,
    y: 20
}, 20, 30);
var rectangle2 = rectangle1.clone();
rectangle2.properties.color = "blue";
console.log(rectangle1);
console.log(rectangle2);
