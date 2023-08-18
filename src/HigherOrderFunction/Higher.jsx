import { useState } from "react"

let Higher=(X)=>{
    function Nested(){
        let [sal,changeSal]=useState(15000)
        let incsal=()=>{changeSal(sal+5000)}
        return(
            <div>
           <X data={sal} fun={incsal} />
            </div>
        )
    }
    return Nested
}
export default Higher