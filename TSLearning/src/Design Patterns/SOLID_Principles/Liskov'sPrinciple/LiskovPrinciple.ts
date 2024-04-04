abstract class Shape{
    abstract calculateArea():number
}


class Rectangle extends Shape{
    constructor(public width:number , public length:number){
        super()
    }
    calculateArea(): number {
        return this.width*this.length
    }
}


class Square extends Shape{
    constructor(public length:number){
        super()
    }
    calculateArea(): number {
        return 4*this.length
    }
}


function getArea(shape:Shape){
    return shape.calculateArea()
}


let square = new Square(10)

let rect = new Rectangle(5,10)

let AreaOfSquare = getArea(square) /* Although this function accepts shape as parameter , it can also accept it's subtypes like square and rectangele 
                   this is what liskov's principle states */
let AreaOfReactangle = getArea(rect)


console.log(`AreaOfSquare:${AreaOfSquare} , AreaOfRectangle:${AreaOfReactangle}`)
