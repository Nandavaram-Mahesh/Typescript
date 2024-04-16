

/*
function Overload


type Filter = {
    (array:number[],predicate:(item:number)=>boolean):number[];
    (array:string[],predicate:(item:string)=>boolean):string[];
    (array:object[],predicate:(item:object)=>boolean):object[];
}

  This is very repetitive and becomes very difficult to implement , so for this problem we have generics



function filter(array:any[],predicate:Function){
    let results =[]

    for(let i=0;i<array.length;i++){
        let item = array[i]
        if(predicate(item)){
            results.push(item)
        }
    }
    return results
}


const numbersArr= [1,2,3,7,8,9]

function findBiggerValue(value:number){
    return value>7
}
const filteredValue = filter(numbersArr,findBiggerValue)

console.log(filteredValue)



const animals = ["cat","dog","lion","penguin"]

function findCat(value:string){
    return value==="cat"
}


const filteredAnimal= filter(animals,findCat)

console.log(filteredAnimal)
 */ 



// Generics

/*
type Filter = {
    <T>(array:T[],predicate:(item:T)=>boolean):T[]
}
*/
/*
type Filter<T> = {
    (array:T[],predicate:(item:T)=>boolean):T[]
}

if u declare a generic this way then u have to define what type of generic it is while implementing the function

Example:

const filter:Filter<string>=(array,predicate)=>{
    let results =[]

    for(let i=0;i<array.length;i++){
        let item = array[i]
        if(predicate(item)){
            results.push(item)
        }
    }
    return results
}
*/

type Filter= <T>(array:T[],predicate:(item:T)=>boolean)=>T[]


/*
 

const filter:Filter=(array,predicate)=>{
    let results =[]

    for(let i=0;i<array.length;i++){
        let item = array[i]
        if(predicate(item)){
            results.push(item)
        }
    }
    return results
}

*/

// Inline Generic

const filter= <T>(array:T[],predicate:(item:T)=>boolean):T[]=>{
let results =[]

for(let i=0;i<array.length;i++){
    let item = array[i]
    if(predicate(item)){
        results.push(item)
    }
}
return results


}

const numbersArr= [1,2,3,7,8,9]

function findBiggerValue(value:number){
    return value>7
}
const filteredValue = filter(numbersArr,findBiggerValue)

console.log(filteredValue)



const animals = ["cat","dog","lion","penguin"]

function findCat(value:string){
    return value==="cat"
}


const filteredAnimal= filter(animals,findCat)

console.log(filteredAnimal)








//  Map function Implememtation




const myMap = <T,U>(array:T[],predicateFn:(item:T)=>U):U[]=>{
    let newArr=[]
    for(let i=0;i<array.length;i++){
        newArr[i]=predicateFn(array[i])

    }
    return newArr
}


const numbersArr1=[1,2,3,4,5,6]

function mulpilyByTwo(item:number){
    return item*2
}
function squareOfNum(item:number){
    return item**2
}
const mapResult = myMap(numbersArr1,squareOfNum)

console.log(mapResult)







