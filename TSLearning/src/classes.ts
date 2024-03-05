class SuccessfullPerson {
    private name: string
    private email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }

    public greet() {
        return `Welcome ${this.name}`
    }

    public getNameNdEmailId() {
        return [this.name, this.email]
    }
}

const person3 = new SuccessfullPerson('Mahesh', 'mahesh.nandavaram96@gmail.com')

const person4 = new SuccessfullPerson('Claudia', 'claudia.richardxx@gmail.com')


console.log(person3.greet())
console.log(person4.greet())

console.log(person3.getNameNdEmailId())



// Inheritance

/*
class User {
    private name: string;
    protected email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class AdminUser extends User {

    isAdmin: boolean = true;
    usersReporting: number;

    constructor(
        name: string,
        email: string,
        age: number,
        usersReporting: number
    ) {
        super(name, email, age);
        this.usersReporting = usersReporting;
    }
}

const user: User = new User("John", "john@email.com", 32);
const admin: AdminUser = new AdminUser("Mark", "mark@email.com", 34, 5);

console.log(user);
console.log(admin);
 */



// shorthand Syntax

class User {
    constructor(private userName: string, protected email: string, public age: number) {}
}


class AdminUser extends User {

    isAdmin: boolean = true;

    constructor(
        userName: string,
        email: string,
        age: number,
        public usersReporting: number
    ) {
        super(userName, email, age);
    }
}


const user: User = new User("John", "john@email.com", 32);
const admin: AdminUser = new AdminUser("Mark", "mark@email.com", 34, 5);

console.log(user);
console.log(admin);


// Accessors and Mutators (getters/setters) 

class DecentPerson {
    private testUsersAge(age: number) {
      if (age > 200 || age < 0) {
        throw new Error("The age must be within range of 0-200");
      }
      return age;
    }
  
    constructor(private _name: string, private _age: number) {
      this.testUsersAge(_age);
      this._age = _age;
    }
  
    public set name(name: string) {
      this._name = name;
    }
  
    public get name() {
      return this._name;
    }
  
    public set age(age: number) {
      this.testUsersAge(age);
      this._age = age;
    }
  
    public get age() {
      return this._age;
    }
  }
  
  const person5: DecentPerson = new DecentPerson("John", 42);
  console.log(person5);
  console.log(person5.age);
  console.log(person5.name);


