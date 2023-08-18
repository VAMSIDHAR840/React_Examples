import { useCallback, useState } from "react"
import Button from "./Buttton"
import Count from "./Count"

let Main=()=>{
    let [age,changeAge]=useState(23)
    let [sal,changeSal]=useState(15000)
    let incage=useCallback(()=>{
        changeAge(age+1)
    },[age])
    let incsal=useCallback(()=>{
        changeSal(sal+5000)
    },[sal])
    return(
        <div>
         <Count data={age}>age :</Count>
         <Button fun={incage}>Incage</Button>
         <Count data={sal}>Sal :</Count>
         <Button fun={incsal} >Inc Sal </Button>
        </div>
    )
}
export default Main