import { useContext } from "react"
import {data} from "./A"
let E=()=>{
    let abc=useContext(data)
    return(
        <div>
             <h1>
                {abc[0].name} {abc[0].use}
             </h1>
             <h1>
                {abc[1].name} {abc[1].use}
             </h1>
             <h1>
                {abc[2].name} {abc[2].use}
             </h1>
        </div>
    )
}
export default E