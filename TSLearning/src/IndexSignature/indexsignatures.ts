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
