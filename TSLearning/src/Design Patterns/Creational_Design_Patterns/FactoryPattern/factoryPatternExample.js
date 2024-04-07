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
// Abstract Class
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(amount) {
        this.amount = amount;
    }
    return PaymentProcessor;
}());
// Concrete Classes
var PaypalPayment = /** @class */ (function (_super) {
    __extends(PaypalPayment, _super);
    function PaypalPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaypalPayment.prototype.processPayment = function () {
        console.log("".concat(this.amount, ": Payment processed via paypal"));
    };
    return PaypalPayment;
}(PaymentProcessor));
var StripePayment = /** @class */ (function (_super) {
    __extends(StripePayment, _super);
    function StripePayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripePayment.prototype.processPayment = function () {
        console.log("".concat(this.amount, ":Payment processed via stripe"));
    };
    return StripePayment;
}(PaymentProcessor));
var CredPayment = /** @class */ (function (_super) {
    __extends(CredPayment, _super);
    function CredPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CredPayment.prototype.processPayment = function () {
        console.log("".concat(this.amount, ":Payment processed via cred"));
    };
    return CredPayment;
}(PaymentProcessor));
// Factory Class
var PaymentProcessorFactory = /** @class */ (function () {
    function PaymentProcessorFactory() {
    }
    PaymentProcessorFactory.prototype.createProcessor = function (type, amount) {
        switch (type) {
            case "stripe":
                return new StripePayment(amount);
            case "paypal":
                return new PaypalPayment(amount);
            case "cred":
                return new CredPayment(amount);
        }
    };
    return PaymentProcessorFactory;
}());
// Client Code
var paymentProcessorFactory = new PaymentProcessorFactory();
var paypalPayment = paymentProcessorFactory.createProcessor("paypal", 1000);
var stripePayment = paymentProcessorFactory.createProcessor("stripe", 500);
paypalPayment.processPayment();
stripePayment.processPayment();
