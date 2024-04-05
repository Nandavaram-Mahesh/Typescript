abstract class NewCar{
    constructor(public model:string,public productionYear:number){}

    abstract displayModelInfo():void
}


class Sedan extends NewCar{

    displayModelInfo(): void {
        console.log(`The model of the car is:${this.model} , ProductionYear:${this.productionYear}`)
    }
}


class Suv extends NewCar{

    displayModelInfo(): void {
        console.log(`The model of the car is:${this.model} , ProductionYear:${this.productionYear}`)
    }
}

class Hatchback extends NewCar{

    displayModelInfo(): void {
        console.log(`The model of the car is:${this.model} , ProductionYear:${this.productionYear}`)
    }
}



class CarFactory{
    public createCar( type:"sedan"|"suv"|"hatchback",model:string,productionYear:number):NewCar{
        switch(type){
            case "sedan":
                return new Sedan(model,productionYear)
            case "suv":
                return new Suv(model,productionYear)
            case "hatchback":
                return new Hatchback(model,productionYear)        
        }
    }   
}



const carFactory = new CarFactory()

const sedan = carFactory.createCar("sedan","camry",2024)

sedan.displayModelInfo()
