interface IProductA{
    operationA():string
}

interface IProductB{
    operationB():string
    combinedOperation(collaborator:IProductA):string
}

interface IFactory{
    createProductA():IProductA
    createProductB():IProductB
}




class ProductA implements IProductA{
    operationA(): string {
        return "Performing operation on ProductA"
    }
}

class ProductB implements IProductB{
    operationB(): string {
        return "Performing operation on ProductB"
    }

    combinedOperation(collaborator: IProductA): string {
        return `Performing operation on ProductB with ${collaborator.operationA()}`
    }
}


class Factory implements IFactory{
    
    createProductA(): IProductA {
        return new ProductA()
    }

    createProductB(): IProductB {
        return new ProductB
    }

}



const factory = new Factory()

const productA = factory.createProductA()

console.log(productA.operationA())

const productB = factory.createProductB()

console.log(productB.operationB())

console.log(productB.combinedOperation(productA))