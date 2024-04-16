// Static Property ,  anything u declare static u need not intantiatie it 


class Electronics {
    public static phoneCategory: string = "smartPhones"

    public static getPhoneCategory() {
        return this.phoneCategory
    }
}

console.log(Electronics.phoneCategory)

console.log(Electronics.getPhoneCategory())




//  Abstract Class
type Holidays = Array<{
    date: Date,
    reason: string
}>
abstract class Department {
    
    protected abstract holidays: Holidays
    
    protected constructor(protected name: string) { }

    public addHolidays(holidays: Holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday)
            }
        }

    }
    
    public abstract showHolidays():void
}

class ItDepartment extends Department {
    
    protected holidays: Holidays = []
    
    constructor() {
        super("IT Department")
    }

    public showHolidays() {
        console.log(`These holidays are for ${this.name}`)
        console.log(this.holidays)
    }
    
}

class AdminDepartment extends Department {
    
    protected holidays: Holidays = []
    
    constructor() {
        super("Admin Department")
    }
    
    public showHolidays() {
        console.log(`These holidays are for ${this.name}`)
        console.log(this.holidays)
    }


}

const adminDep = new AdminDepartment()
const itDep = new ItDepartment()
adminDep.addHolidays([{ date: new Date(), reason: "Break" }])
adminDep.showHolidays()
itDep.addHolidays([{ date: new Date(), reason: "christmas" }])
itDep.showHolidays()
