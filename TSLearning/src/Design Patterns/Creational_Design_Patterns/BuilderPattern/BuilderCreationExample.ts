// When ever we want to build a complex objects and build them in step by step then we can use builder pattern



interface ICustomerDetails{
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string
}


interface ICustomerBuilder{
    setFirstName(firstName:string):ICustomerBuilder
    setLastName(lastName:string):ICustomerBuilder
    setEmail(email:string):ICustomerBuilder
    setPhoneNumber(phoneNumber:string):ICustomerBuilder
    build():ICustomerDetails
}


class BCustomer implements ICustomerDetails{

    constructor(public firstName:string, public lastName:string, public email:string, public phoneNumber:string){}
}

// Construction of builder is happening here 
class CustomerBuilder implements ICustomerBuilder{

    private firstName:string = ''
    private lastName:string = ''
    private email:string=''
    private phoneNumber:string=''


    setFirstName(firstName:string):ICustomerBuilder{
        this.firstName = firstName
        return this
    }

    setLastName(lastName:string):ICustomerBuilder{
        this.lastName = lastName
        return this
    }

    setEmail(email: string): ICustomerBuilder {
        this.email = email

        return this
    }

    setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber
        return this
    }

    build():ICustomerDetails{
        return new BCustomer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber
        )
    }
}

// Director directs what to build
class CustomerDirector{
    constructor(private builder:ICustomerBuilder){}

    public buildMinimalCustomer(firstName:string,lastName:string,email:string){

        return this.builder.setFirstName(firstName).setLastName(lastName).setEmail(email).build()
    }


}



// Client Code
const newBuilder:ICustomerBuilder = new CustomerBuilder()
const newDirector:CustomerDirector = new CustomerDirector(newBuilder)
const newCustomer:ICustomerDetails = newDirector.buildMinimalCustomer("Nandavaram","Mahesh","mahesh.nandavaram96@gmail.com")


console.log(newCustomer)
