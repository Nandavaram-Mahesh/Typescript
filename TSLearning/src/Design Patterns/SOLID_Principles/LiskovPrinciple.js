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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this) || this;
        _this.length = length;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return 4 * this.length;
    };
    return Square;
}(Shape));
function getArea(shape) {
    return shape.calculateArea();
}
var square = new Square(10);
var rect = new Rectangle(5, 10);
var AreaOfSquare = getArea(square); /* Although this function accepts shape as parameter , it can also accept it's subtypes like square and rectangele
                   this is what liskov's principle states */
var AreaOfReactangle = getArea(rect);
console.log("AreaOfSquare:".concat(AreaOfSquare, " , AreaOfRectangle:").concat(AreaOfReactangle));
