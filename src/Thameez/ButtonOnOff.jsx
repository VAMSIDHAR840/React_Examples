import { useState } from "react"

let ButtonOnOff=()=>{
    let [state,changeState]=useState(true)
    let btn=()=>{
        changeState(!state)
    }
    return(
        <div>
           <button onClick={btn}  >{state?"ON":"OF"}</button><br />
         
        </div>
    )
}
export default ButtonOnOff