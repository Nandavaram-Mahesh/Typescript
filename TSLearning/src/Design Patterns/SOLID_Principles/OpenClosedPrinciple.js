// Wrong Way 
// this violates the  Open Closed Principle
// The code should be open for changes and closed for modifications
// what if we want to add a new  customer category , then we need to change the code 
var Customer = /** @class */ (function () {
    function Customer(customer) {
        this.customer = customer;
    }
    Customer.prototype.getDiscount = function () {
        if (this.customer == "Premium") {
            return 30;
        }
        else if (this.customer == "regular") {
            return 10;
        }
    };
    return Customer;
}());
var PremiumCustomer = /** @class */ (function () {
    function PremiumCustomer() {
    }
    PremiumCustomer.prototype.getDiscount = function () {
        return 30;
    };
    return PremiumCustomer;
}());
var RegularCustomer = /** @class */ (function () {
    function RegularCustomer() {
    }
    RegularCustomer.prototype.getDiscount = function () {
        return 10;
    };
    return RegularCustomer;
}());
var ClassicCustomer = /** @class */ (function () {
    function ClassicCustomer() {
    }
    ClassicCustomer.prototype.getDiscount = function () {
        return 20;
    };
    return ClassicCustomer;
}());
var RealCustomer = /** @class */ (function () {
    function RealCustomer(customer) {
        this.customer = customer;
    }
    RealCustomer.prototype.getDiscount = function () {
        return this.customer.getDiscount();
    };
    return RealCustomer;
}());
var premiumCustomer = new PremiumCustomer();
var customer = new RealCustomer(premiumCustomer);
var discount = customer.getDiscount();
console.log(discount);
