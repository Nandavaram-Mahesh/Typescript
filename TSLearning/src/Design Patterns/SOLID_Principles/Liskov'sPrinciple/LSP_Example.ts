abstract class PaymentProcesser{
    abstract processPayment(amount:number):void
}

class DebitCardProcessor extends PaymentProcesser{
    processPayment(amount:number): void {
        
        console.log(`Debit Card Payment of ${amount} Successfull`) 
    }
}

class CreditCardProcessor extends PaymentProcesser{
    processPayment(amount:number): void {
        
        console.log(`Credit Card Payment of ${amount} Successfull`) 
    }
}

class Paypal extends PaymentProcesser{
    processPayment(amount:number): void {
        
        console.log(`Paypal Payment of ${amount} Successfull`) 
    }
}



function executePayment(paymentProcessor:PaymentProcesser,amount:number):void{
    paymentProcessor.processPayment(amount)
}



const paypal = new Paypal()

executePayment(paypal,5000)

const debitCard = new DebitCardProcessor()

executePayment(debitCard,1000)

