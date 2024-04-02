
// NewUser class only care about user details 
class NewUser{
    constructor(name:string,gender:string){}
}

// This class cares about only autheticating user nothing else 
class AuthenticateNewUser{
    constructor(user:NewUser){}

    authenticate():string{
        return "User Authenticated Successfully"
    }
}

// This class cares about only Assigning role to user nothing else
class AssignRoleToUser{
    
    constructor(user:NewUser){}

    assignRole():string {
        return "User is assigned Admin Role"
    }

}


// since each class is caring about one responsibility and nothing else , this is called as SINGLE RESPONSIBILITY PRINCIPLE