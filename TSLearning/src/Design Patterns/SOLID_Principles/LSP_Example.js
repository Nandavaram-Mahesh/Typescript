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
var PaymentProcesser = /** @class */ (function () {
    function PaymentProcesser() {
    }
    return PaymentProcesser;
}());
var DebitCardProcessor = /** @class */ (function (_super) {
    __extends(DebitCardProcessor, _super);
    function DebitCardProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebitCardProcessor.prototype.processPayment = function (amount) {
        console.log("Debit Card Payment of ".concat(amount, " Successfull"));
    };
    return DebitCardProcessor;
}(PaymentProcesser));
var CreditCardProcessor = /** @class */ (function (_super) {
    __extends(CreditCardProcessor, _super);
    function CreditCardProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardProcessor.prototype.processPayment = function (amount) {
        console.log("Credit Card Payment of ".concat(amount, " Successfull"));
    };
    return CreditCardProcessor;
}(PaymentProcesser));
var Paypal = /** @class */ (function (_super) {
    __extends(Paypal, _super);
    function Paypal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Paypal.prototype.processPayment = function (amount) {
        console.log("Paypal Payment of ".concat(amount, " Successfull"));
    };
    return Paypal;
}(PaymentProcesser));
function executePayment(paymentProcessor, amount) {
    paymentProcessor.processPayment(amount);
}
var paypal = new Paypal();
executePayment(paypal, 5000);
var debitCard = new DebitCardProcessor();
executePayment(debitCard, 1000);
