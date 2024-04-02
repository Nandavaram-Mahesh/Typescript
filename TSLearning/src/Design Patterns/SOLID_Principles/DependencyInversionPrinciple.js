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
var MysqlDatabase = /** @class */ (function () {
    function MysqlDatabase() {
    }
    MysqlDatabase.prototype.save = function (data) {
        console.log(data);
    };
    return MysqlDatabase;
}());
var MongoDBDatabase = /** @class */ (function () {
    function MongoDBDatabase() {
    }
    MongoDBDatabase.prototype.save = function (data) {
        console.log(data);
    };
    return MongoDBDatabase;
}());
var HighLevelModule = /** @class */ (function () {
    function HighLevelModule(database) {
        this.database = database;
    }
    HighLevelModule.prototype.saveData = function (data) {
        this.database.save("Data:".concat(data));
    };
    return HighLevelModule;
}());
var mongoDb = new MongoDBDatabase();
var mongoDbData = new HighLevelModule(mongoDb);
mongoDbData.saveData("Welcom to MongoDb");
