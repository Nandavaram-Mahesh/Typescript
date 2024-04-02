// Wrong Way 
// this violates the  Open Closed Principle

// The code should be open for changes and closed for modifications

// what if we want to add a new  customer category , then we need to change the code 
class Customer{
    constructor(private customer:"Premium"|"regular"){
        
    }

    getDiscount(){
        if(this.customer=="Premium"){
            return 30
        }
        else if(this.customer=="regular"){
            return 10
        }
    }
}


// Right Way 
// This obeys Open Closed Principle

interface ICustomer{
    getDiscount():number
}



class PremiumCustomer implements ICustomer{
    getDiscount(): number {
        return 30
    }
}

class RegularCustomer implements ICustomer{
    getDiscount(): number {
        return 10
    }
}

class ClassicCustomer implements ICustomer{
    getDiscount(): number {
        return 20
    }
}



class RealCustomer{
    constructor(public customer:ICustomer){

    }

    getDiscount(){
        return this.customer.getDiscount()
    }
}


let premiumCustomer = new PremiumCustomer()

let customer = new RealCustomer(premiumCustomer)
let discount = customer.getDiscount()
console.log(discount)