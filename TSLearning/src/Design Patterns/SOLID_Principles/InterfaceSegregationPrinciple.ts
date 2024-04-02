/*
 
interface Machine{
    print(document:Document):void
    fax(document:Document):void
    scan(document:Document):void
}



class MultiFunctionalPrinter implements Machine{

    print(document:Document):void{}

    scan(document:Document):void{}

    fax(document:Document):void{}
}


// A SimplePrinter can only print  
// but it has to adhere to the contract of Machine and implement rest of the methods also, which are not neccessary
// Violates Interface segregation Principle - It says who ever implements the interface should not be forced to implement everything 

class SimplePrinter implements Machine{
    print(document:Document):void{}

    scan(document:Document):void{}

    fax(document:Document):void{}
}


*/

// Here we are segregating the interfaces based on the neccessity

interface Printer{
    print(document:Document):void
}

interface Scanner{
    scan(document:Document):void
}

interface FaxMachine{
    fax(document:Document):void
}



class MultiFunctionalPrinter implements Printer,Scanner,FaxMachine{

    print(document:Document):void{}

    scan(document:Document):void{}

    fax(document:Document):void{}
}


class SimplePrinter implements Printer{
    print(document:Document):void{}
}