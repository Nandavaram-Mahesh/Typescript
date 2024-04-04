
class Logger{

    private static instance:Logger
    
    private constructor(){}

    public static getInstance(){
        if(!Logger.instance){
            Logger.instance = new Logger()
        }

        return Logger.instance
    }

    public logMessage(message:string):void{
        const timeStamp = new Date()

        console.log(`[${timeStamp.toLocaleString()}]- ${message}`)
    }

}


let logger1 = Logger.getInstance()

logger1.logMessage("This is the first Message")


let logger2 = Logger.getInstance()


logger2.logMessage("This is second Message")