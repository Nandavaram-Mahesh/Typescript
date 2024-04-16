// Static Property ,  anything u declare static u need not intantiatie it 
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
var Electronics = /** @class */ (function () {
    function Electronics() {
    }
    Electronics.getPhoneCategory = function () {
        return this.phoneCategory;
    };
    Electronics.phoneCategory = "smartPhones";
    return Electronics;
}());
console.log(Electronics.phoneCategory);
console.log(Electronics.getPhoneCategory());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.addHolidays = function (holidays) {
        if (Array.isArray(holidays)) {
            for (var _i = 0, holidays_1 = holidays; _i < holidays_1.length; _i++) {
                var holiday = holidays_1[_i];
                this.holidays.push(holiday);
            }
        }
    };
    Department.prototype.showHolidays = function () {
        console.log(this.holidays);
    };
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment() {
        var _this = _super.call(this, "IT Department") || this;
        _this.holidays = [];
        return _this;
    }
    ItDepartment.prototype.showHolidays = function () {
        console.log("These holidays are for ".concat(this.name));
        console.log(this.holidays);
    };
    return ItDepartment;
}(Department));
var AdminDepartment = /** @class */ (function (_super) {
    __extends(AdminDepartment, _super);
    function AdminDepartment() {
        var _this = _super.call(this, "Admin Department") || this;
        _this.holidays = [];
        return _this;
    }
    AdminDepartment.prototype.showHolidays = function () {
        console.log("These holidays are for ".concat(this.name));
        console.log(this.holidays);
    };
    return AdminDepartment;
}(Department));
var adminDep = new AdminDepartment();
var itDep = new ItDepartment();
adminDep.addHolidays([{ date: new Date(), reason: "Break" }]);
adminDep.showHolidays();
itDep.addHolidays([{ date: new Date(), reason: "christmas" }]);
itDep.showHolidays();
