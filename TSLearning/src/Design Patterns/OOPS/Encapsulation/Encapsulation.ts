

class BankAccount{

    private _balance:number

    constructor(initialBalance:number){
        this._balance = initialBalance
    }

    public get balance():number{

        return this._balance
    }

    depositAmount(amount:number):void{
        this._balance+=amount
    }

    withdrawAmount(amount:number):void{

        if(this._balance<=0){
            console.log("Insufficient Balance")
            return
        }

        if((this._balance-amount)<0){
            console.log("Insufficient Balance acn't withdraw money")
            return
        }

        this._balance-=amount
    }
        
}


const myAcc = new BankAccount(500)

myAcc.depositAmount(10000)
myAcc.withdrawAmount(500)
let bankBalance = myAcc.balance

console.log(bankBalance)