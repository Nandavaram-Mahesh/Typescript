var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Reactangle = /** @class */ (function () {
    function Reactangle(width, length) {
        this.width = width;
        this.length = length;
    }
    Reactangle.prototype.area = function () {
        return this.width * this.length;
    };
    Reactangle.prototype.perimeter = function () {
        return 2 * (this.width + this.length);
    };
    return Reactangle;
}());
function calculateArea(shape) {
    return shape.area();
}
// client Code
var circle = new Circle(5);
var rectangle = new Reactangle(5, 10);
var circleArea = calculateArea(circle);
var rectangleArea = calculateArea(rectangle);
console.log("circleArea:".concat(circleArea));
console.log("RectangleArea:".concat(rectangleArea));
