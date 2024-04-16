
function FirstDecorator(constructor:Function,context:any){
    console.log("Decorator Invoked")
    console.log(constructor)
    console.log(context)
}

// @ts-ignore
@FirstDecorator /* This is not an error */
class JumboAeroplane{
    constructor(public _aircraftModel:string,public pilot:string ){}


    public pilotName():void{
        console.log(this.pilot)
    }

    public get aircraftModel():string{
        return this._aircraftModel
    }   

}

