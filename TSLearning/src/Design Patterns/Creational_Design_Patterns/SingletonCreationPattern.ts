
// There should be only one instance for Singleton class
class Singleton{
    
    // Nobody outside the class should be able to access or instantiate this value 
    // private  - only available within same class
    // static - cannot be instantiated
    private static instance:Singleton;

    private static _value:number;

    private constructor(){}

    public static getInstance(){

        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }

    public set _value(value:number){
        Singleton._value = value
    }

    public get _value(){
        return Singleton._value
    }

}



let instance1 = Singleton.getInstance()

let instance2 = Singleton.getInstance()


instance1._value = 100

console.log(instance1._value)
console.log(instance2._value)

console.log(instance1===instance2)

