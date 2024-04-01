

//  Abstraction Use Case
// Javascript provides us a data object and it abstracts the data , this is a case of abstraction

let now = new Date()

let currentYear = now.getFullYear()

let currentMonth = now.getMonth()

let currentDate = now.getDate()


console.log(`currentYear:${currentYear} , currentMonth:${currentMonth}, currentDate:${currentDate}`)








// interface IDate{
//     currentYear():number
//     currentMonth():number
//     currentDate():number
// }



// class MyDate implements IDate{

//     constructor(private date:Date){}

//     currentYear(): number {

//         return this.date.getFullYear()
//     }

//     currentMonth(): number {
//         return this.date.getMonth()
//     }

//     currentDate(): number {

//         return this.date.getDate()
//     }

// }


// let date = new MyDate(new Date())

// const currentYear = date.currentYear()

// const currentMonth = date.currentMonth()

// const currentDate = date.currentDate()


// console.log(`currentYear:${currentYear} , currentMonth:${currentMonth}, currentDate:${currentDate}`)