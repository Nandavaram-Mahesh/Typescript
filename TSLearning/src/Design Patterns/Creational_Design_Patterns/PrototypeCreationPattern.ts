
interface UserDetails{
    name:string;
    age:number;
    email:string
}

interface Prototype{
    clone():Prototype
    getUserDetails():UserDetails
}

class ConcretePrototype implements Prototype{

    constructor(private User:UserDetails){}

    public clone():Prototype{
        const clone = Object.create(this)
        clone.User = {...this.User}
        return clone
    }

    public getUserDetails(): UserDetails {
        return this.User
    }
}


let user1 = new ConcretePrototype({
    name:"Mahesh",
    age:27,
    email:"mahesh.nandavaram96@gmail.com"

})


let user2 = user1.clone()

console.log(user1===user2)