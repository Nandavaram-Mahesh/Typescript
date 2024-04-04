var BCustomer = /** @class */ (function () {
    function BCustomer(firstName, lastName, email, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return BCustomer;
}());
var CustomerBuilder = /** @class */ (function () {
    function CustomerBuilder() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phoneNumber = '';
    }
    CustomerBuilder.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
        return this;
    };
    CustomerBuilder.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    };
    CustomerBuilder.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    CustomerBuilder.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    };
    CustomerBuilder.prototype.build = function () {
        return new BCustomer(this.firstName, this.lastName, this.email, this.phoneNumber);
    };
    return CustomerBuilder;
}());
var CustomerDirector = /** @class */ (function () {
    function CustomerDirector(builder) {
        this.builder = builder;
    }
    CustomerDirector.prototype.buildMinimalCustomer = function (firstName, lastName, email) {
        return this.builder.setFirstName(firstName).setLastName(lastName).setEmail(email).build();
    };
    return CustomerDirector;
}());
var newBuilder = new CustomerBuilder();
var newDirector = new CustomerDirector(newBuilder);
var newCustomer = newDirector.buildMinimalCustomer("Nandavaram", "Mahesh", "mahesh.nandavaram96@gmail.com");
console.log(newCustomer);
