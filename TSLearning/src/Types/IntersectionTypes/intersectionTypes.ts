import { Doberman, Dolmation } from "../commonTypes"

type IntersectionType = Doberman & Dolmation

let dog2: IntersectionType = {
    name: "Jhonny",
    bloodLine: "Dolmation",
    height: 160,
    color: "blackAndWhite",
    wags: true,
    hasTail: true
}