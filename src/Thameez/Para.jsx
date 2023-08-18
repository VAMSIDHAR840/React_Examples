import { useState } from "react"

let Para=()=>{
    let para=<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor inventore nulla, necessitatibus culpa iste quae, molestiae excepturi ab nostrum eligendi voluptatibus quod repudiandae veniam fugiat obcaecati reprehenderit. Dicta, nesciunt magnam.</p>
    let [state,changeState]=useState("")
    let btn=()=>{
        changeState(!state)
    }
    return(
        <div>
          <button onClick={btn}>{state?"Para":"Hidden"}</button>
          {state?para:""}
        </div>
    )
}
export default Para