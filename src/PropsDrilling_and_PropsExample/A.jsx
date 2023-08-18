import { createContext } from "react"
import B from "./B"

export let data=createContext()
let A=()=>{
let web=[
    {
        name :"HTML",
        use : "Is Used to create a Webpage"
    },
    {
        name :" CSS",
        use :" is used to apply Styles for the Webpage",
    },
    {
        name : "JS",
        use :" IS used to add additional functionality"
    }
]
    return(
        <div>
         <data.Provider value={web} >
            <B/>
         </data.Provider>
        </div>
    )
}
export default A