// Abstract Class
abstract class PaymentProcessor{

    constructor(public amount:number){}

    abstract processPayment():void
}


// Concrete Classes
class PaypalPayment extends PaymentProcessor{

    processPayment(): void {
        console.log(`${this.amount}: Payment processed via paypal`)
    }
}


class StripePayment extends PaymentProcessor{

    processPayment(): void {
        console.log(`${this.amount}:Payment processed via stripe`)
    }
}

class CredPayment extends PaymentProcessor{

    processPayment(): void {
        console.log(`${this.amount}:Payment processed via cred`)
    }
}




// Factory Class


class PaymentProcessorFactory{
    public createProcessor( type:"stripe"|"paypal"|"cred" ,  amount:number){

        switch(type){
            case "stripe":
                return new StripePayment(amount)
            case "paypal":
                return new PaypalPayment(amount)
            case "cred":
                return new CredPayment(amount)
        }
    }


}




// Client Code

const paymentProcessorFactory:PaymentProcessorFactory =  new PaymentProcessorFactory()

const paypalPayment = paymentProcessorFactory.createProcessor("paypal",1000)
const stripePayment = paymentProcessorFactory.createProcessor("stripe",500)


paypalPayment.processPayment()
stripePayment.processPayment()