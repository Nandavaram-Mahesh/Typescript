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
var filter = function (array, predicate) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (predicate(item)) {
            results.push(item);
        }
    }
    return results;
};
var numbersArr = [1, 2, 3, 7, 8, 9];
function findBiggerValue(value) {
    return value > 7;
}
var filteredValue = filter(numbersArr, findBiggerValue);
console.log(filteredValue);
var animals = ["cat", "dog", "lion", "penguin"];
function findCat(value) {
    return value === "cat";
}
var filteredAnimal = filter(animals, findCat);
console.log(filteredAnimal);
//  Map function Implememtation
var myMap = function (array, predicateFn) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        newArr[i] = predicateFn(array[i]);
    }
    return newArr;
};
var numbersArr1 = [1, 2, 3, 4, 5, 6];
function mulpilyByTwo(item) {
    return item * 2;
}
function squareOfNum(item) {
    return Math.pow(item, 2);
}
var mapResult = myMap(numbersArr1, squareOfNum);
console.log(mapResult);
