import {  useState } from "react"
import { useMemo } from "react"
let UseMemo=()=>{
    let [data1,changeData1]=useState(0)
    let [data2,changeData2]=useState(0)
    let  ageChange=()=>{changeData1(data1+1)}
    let salChange=()=>{changeData2(data2+5000)}

    let even=()=>{
        let i=0
        while(i<100000000000){
            i++
            return data1%2==0
        }
    }
    return(
        <div>
         {data1} <br />
        
         <button onClick={ageChange}>Age</button><br />
         {data2} <br />
         <button onClick={salChange}>Sal</button> <br />

           {even()?"Even":"Odd"}

        </div>
    )
}
export default UseMemo