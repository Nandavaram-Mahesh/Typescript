interface ShapeProperties{
    color:string
    x:number
    y:number
}

abstract class Shapes{


    constructor(public properties:ShapeProperties){}
    abstract clone():Shapes
}


class Rectangles extends Shapes{
    
    constructor(public properties:ShapeProperties , public width:number , public length:number){
        super(properties)
    }

    clone():Shapes{
        
        let clonedProperties:ShapeProperties={
            color:this.properties.color,
            x:this.properties.x,
            y:this.properties.y
        }

        return new Rectangles(clonedProperties,this.width,this.length)
        
    }

}


class Circles extends Shapes{
    
    constructor(public properties:ShapeProperties , public radius:number){
        super(properties)
    }

    clone():Shapes{
        
        let clonedProperties:ShapeProperties={
            color:this.properties.color,
            x:this.properties.x,
            y:this.properties.y
        }

        return new Circles(clonedProperties,this.radius)
        
    }

}



let rectangle1 = new Rectangles({
    color:"red",
    x:10,
    y:20
},20,30)


let rectangle2 = rectangle1.clone()

rectangle2.properties.color="blue"


console.log(rectangle1)

console.log(rectangle2)