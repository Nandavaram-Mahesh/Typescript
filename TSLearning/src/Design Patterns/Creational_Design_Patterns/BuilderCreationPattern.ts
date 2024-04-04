// This pattern is used to build complex objects step by step


interface Builder{
    setPartA():void
    setPartB():void
    setPartC():void
}


class Product {

    private parts:string[] = []


    public addPart(part:string):void{
        this.parts.push(part)
    }

    public listParts(){
        console.log(`Product Parts:${this.parts.join(', ')}`)
    }

}


class ConcreteBuilder implements Builder{
    // Product instance will always be available 
    private product!:Product

    // when ever this ConcreteBuilder is instantiated we make sure that product is set to default 
    constructor(){
        this.reset()
    }

    public reset():void{

        this.product = new Product()
    }

    public  setPartA(): void {
        this.product.addPart("Add PartA")
    }
    public  setPartB(): void {
        this.product.addPart("Add PartB")
    }
    public  setPartC(): void {
        this.product.addPart("Add PartC")
    }

    public getProduct():Product{
        const result = this.product
        this.reset()
        return result
    }
    
}


class Director{

    private _builder!:Builder


    public setBuilder(builder:Builder):void{
        this._builder = builder
    }

    public buildMinimumProduct():void{
        this._builder.setPartA()
    }


    public buildFullProduct():void{
        this._builder.setPartA()
        this._builder.setPartB()
        this._builder.setPartC()
    }
}




const builder = new ConcreteBuilder()

const director = new Director()

director.setBuilder(builder)

director.buildMinimumProduct()

const newProduct = builder.getProduct()

console.log(newProduct)

