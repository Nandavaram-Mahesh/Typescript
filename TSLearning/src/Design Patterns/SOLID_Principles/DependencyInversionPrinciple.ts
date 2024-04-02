/*

class MysqlDatabase{
    save(data:string):void{}
}

// Here HighLevel Module is heavily dependent on LowLevel Module (MysqlDatabase) ,
//  which violates the DependencyInversion Principle - (i) High Level Modules should not depend on low Level Modules , they should depend on abstractions/interfaces

class HighLevelModule {
    constructor(private database:MysqlDatabase){

    }
    saveData(data:string):void{
        this.database.save("Data")
    }
}

*/


interface IDatabase{
    save(data:string):void
}

class MysqlDatabase implements IDatabase{
    save(data:string):void{
        console.log(data)
    }
}

class MongoDBDatabase implements IDatabase{
    save(data:string):void{
        console.log(data)
    }
}


class HighLevelModule {
    constructor(private database:IDatabase){}
    saveData(data:string):void{
        this.database.save(`Data:${data}`)
    }
}



let mongoDb = new MongoDBDatabase()

let mongoDbData = new HighLevelModule(mongoDb)

mongoDbData.saveData("Welcom to MongoDb")