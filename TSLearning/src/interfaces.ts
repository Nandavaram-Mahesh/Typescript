

interface PopularPerson{
    name:string;
    followers:number;
    field:string
    greet?:()=>void;
}
 
const indianPopularPerson:PopularPerson = {
    name:'Mahesh',
    followers:2000000000000000,
    field:"software Engineer"
}


// Generic Interfaces
enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike",
  }
  
  enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota",
  }
  
  enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
  }
  
  interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
  }
  
  const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a ferrari"
  };
  
  const honda: Automobile<string, string, string> = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: "This is a Honda"
  };
  
  const toyota: Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [6676, 97897],
    description: "This is a Toyota"
  };
  
  console.log(ferrari);
  console.log(honda);
  console.log(toyota);



//    Interface with classes


class Car implements Automobile<string, AutomobileBrands, AutomobileColors>{
     
    public type: string="car";

     constructor(public brand:AutomobileBrands,public colors:AutomobileColors[], public description:string){}

}


const ferrariCar:Car= new Car(AutomobileBrands.ferrari,[AutomobileColors.black,AutomobileColors.red],"This is Ferrari")

console.log(ferrariCar)
