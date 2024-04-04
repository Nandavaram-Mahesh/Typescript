
// Here we are creating a contract , which tells who ever implements this interface should have these methods
interface IShape{
    area():number
    perimeter():number
}


class Circle implements IShape{

    constructor(private radius:number){}
    
    area():number{
        return Math.PI * this.radius *this.radius
    }

    perimeter(): number {
        return 2*Math.PI * this.radius 
    }
}

class Reactangle implements IShape{

    constructor(private width:number , private length:number){}
    
    area():number{
        return this.width*this.length
    }

    perimeter(): number {
        return 2*(this.width+this.length) 
    }
}


function calculateArea(shape:IShape):number{
    return shape.area()
}




// client Code - Client/developer has access to only the calculateArea Method and Shape Interface  , 
// rest everything is hid from him , all the complexity is hidden ,
// they just need to initiate the class and call the calculate function and send the Instance to the function 

let circle  = new Circle(5)

let rectangle = new Reactangle(5,10)


const circleArea = calculateArea(circle)

const rectangleArea = calculateArea(rectangle)


console.log(`circleArea:${circleArea}`)
console.log(`RectangleArea:${rectangleArea}`)
