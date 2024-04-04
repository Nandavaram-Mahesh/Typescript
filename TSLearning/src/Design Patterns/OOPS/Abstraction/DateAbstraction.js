var MyDate = /** @class */ (function () {
    function MyDate(date) {
        this.date = date;
    }
    MyDate.prototype.currentYear = function () {
        return this.date.getFullYear();
    };
    MyDate.prototype.currentMonth = function () {
        return this.date.getMonth();
    };
    MyDate.prototype.currentDate = function () {
        return this.date.getDate();
    };
    return MyDate;
}());
var date = new MyDate(new Date());
var currentYear = date.currentYear();
var currentMonth = date.currentMonth();
var currentDate = date.currentDate();
console.log("currentYear:".concat(currentYear, " , currentMonth:").concat(currentMonth, ", currentDate:").concat(currentDate));
