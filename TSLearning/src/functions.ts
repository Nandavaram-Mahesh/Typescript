enum AgeUnit{
    months="months",
    years="years"

}


type greetingFunction = (greeting:string)=>string



type Person={
    name:string;
    age:number;
    ageUnit:AgeUnit;
    country:string;
    greet:greetingFunction
}



function convertAgeToMonths(person:Person):Person{
    person.age = person.age * 12
    person.ageUnit = AgeUnit.months
    return person
}


const techPerson:Person = {
    name:"Bob",
    age:27,
    ageUnit:AgeUnit.years,
    country:"india",
    greet:(greeting)=>{return `${greeting} ${techPerson.name}`}
}



console.log( techPerson.greet("welcome aboard Mr."))






//  Function Overloading


type Reservation = {
    departureDate:Date;
    returnDate?:Date;
    departingFrom:string;
    destination:string;
}

// function type
// type Reserve = (departureDate:Date,returnDate:Date,departingFrom:string,destination:string)=>Reservation

// function call signature 
type Reserve ={
    (departureDate:Date,returnDate:Date,departingFrom:string,destination:string):Reservation|never;
    (departureDate:Date,departingFrom:string,destination:string):Reservation|never
} 



const reserve:Reserve=(
    departureDate:Date,
    returnDateOrDepartingFrom:Date|string,
    departingFromOrDestination:string,
    destination?:string
)=>{
    if(returnDateOrDepartingFrom instanceof Date && destination){
        return{
            departureDate:departureDate,
            returnDate:returnDateOrDepartingFrom,
            departingFrom:departingFromOrDestination,
            destination:destination
        }
    }
    else if(typeof returnDateOrDepartingFrom == "string" ){
        return{
            departureDate:departureDate,
            departingFrom:returnDateOrDepartingFrom,
            destination:departingFromOrDestination
        }
    }
    throw new Error("Enter valid Details")
}






