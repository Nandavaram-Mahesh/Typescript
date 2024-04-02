var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this._balance = initialBalance;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.depositAmount = function (amount) {
        this._balance += amount;
    };
    BankAccount.prototype.withdrawAmount = function (amount) {
        if (this._balance <= 0) {
            console.log("Insufficient Balance");
            return;
        }
        if ((this._balance - amount) < 0) {
            console.log("Insufficient Balance acn't withdraw money");
            return;
        }
        this._balance -= amount;
    };
    return BankAccount;
}());
var myAcc = new BankAccount(500);
myAcc.depositAmount(10000);
myAcc.withdrawAmount(500);
var result = myAcc.balance;
console.log(result);
