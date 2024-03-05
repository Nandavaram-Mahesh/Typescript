type Article = {
    author: string;
    content: string;
    title: string;
    image?: string
}


let aiArticle: Article = {
    author: "Mahesh",
    content: "This article is about the latest trends in AI",
    title: "AI Trends",
}


type Caterer = {
    name: string;
    address: string;
    phone: number
}

type Airplane = {
    model: string;
    flightNumber: string;
    timeOdDeparture: Date;
    timeOfArrival: Date;
    caterer: Caterer
}


const airplane: Airplane = {
    model: "4845",
    flightNumber: "25554",
    timeOdDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Mahesh",
        address: "8-1/3a",
        phone: 7993473337
    }
}

//  Union Types

type Doberman = {
    name: string;
    bloodLine: string;
    height: number;
    hasTail: boolean;
    wags: boolean
}

type Dolmation = {
    name: string;
    bloodLine: string;
    height: number;
    color: string;
}



type DobermanAndDOlmationUnionType = Doberman | Dolmation

let dog1: DobermanAndDOlmationUnionType = {
    name: "Jhonny",
    bloodLine: "Dolmation",
    height: 160,
    color: "blackAndWhite"
}


// Intersection Type

type IntersectionType = Doberman & Dolmation

let dog2: IntersectionType = {
    name: "Jhonny",
    bloodLine: "Dolmation",
    height: 160,
    color: "blackAndWhite",
    wags: true,
    hasTail: true
}



// index Signatures

type Aeroplane = {
    model: string;
    flightNumber: string;
    timeOdDeparture: string;
    timeOfArrival: string;
    from: string;
    to: string
    seats: {            /* Index Signature */
        [key: string]: string
    }
}


const alaskaAeroplane: Aeroplane = {
    model: 'Boeing747',
    flightNumber: "74586",
    timeOdDeparture: "7.30",
    timeOfArrival: "9.30",
    from: "Alaska",
    to: "unitedStates",
    seats: {
        "A10": "Mahesh"
    }
}



// Tuple 
//  name,gender,age
let person: [string, string, number?]

person = ["Mahesh", "Male"]


/*
Create Array of list of students
[
    NumberOfStudents:number,
    passing:boolean,
    'jhon,'stella',
]
 */


type listOfStudents = [number, boolean, ...string[]]




const passingStudents: listOfStudents = [3, true, "jhon", 'stella', 'harry']

const failingStudents: listOfStudents = [1, false, "sagarNaik"]


// ReadOnly Array

let numbers: readonly number[] = [1, 2, 3, 4]

// number.push(5)


// readOnly Tuple

type readOnlyperson = readonly [string, string, number]


const person2: readOnlyperson = ['jhon', 'smith', 27]

type a = Readonly<string[]>
type b = Readonly<Array<string>>




// Practice Assignment


enum Type {
    national = "national",
    academic = "academic",
    public = "public"
}

type TypeOfLibrary = "national"|"academic"|"public"

// "fiction", "history", "computers", "poetry"
enum Genres{
    fiction = "fiction",
    history = "history",
    computers="computers",
    poetry="poetry"
}


type Books = {
    title: string;
    pages: number;
    isbn: string
}

type Members={
    
        name: string; // Name is mandatory
        phone: string; // Phone is mandatory
        [key:string]:string
    
}

type Library = {
    name: string;
    address: string;
    numberOfBooks: number;
    type: Type|TypeOfLibrary;
    books:Array<Books>;
    genres:Array<Genres>
    members:Array<Members>

}











const library:Library = {
    name: "New York Library",
    address: " 24, Some Street, New York",
    numberOfBooks: 1254,
    type: Type.national, // 'national', 'academic', 'public'
    books: [
        {
            title: "Harry Potter",
            pages: 756,
            isbn: "9971-5-0210-0",
        },
        {
            title: "Davinci Code",
            pages: 386,
            isbn: "9971-5-0210-0",
        },
    ],
    genres: [Genres.fiction, Genres.history, Genres.computers, Genres.poetry],
    members: [
        {
            name: "John Doe",
            phone: "+167678978",
        },
        {
            name: "Mark Doe", // Name is mandatory
            phone: "+167678978", // Phone is mandatory
            email: "mark@email.com", // Can have additional optional fields
        },
    ],
};
