
import { Doberman ,Dolmation} from "../commonTypes"

type DobermanAndDOlmationUnionType = Doberman | Dolmation

let dog1: DobermanAndDOlmationUnionType = {
    name: "Jhonny",
    bloodLine: "Dolmation",
    height: 160,
    color: "blackAndWhite"
}
