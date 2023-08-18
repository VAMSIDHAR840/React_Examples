import { useState } from "react"

let IncDec=()=>{
    let [data,changeData]=useState(0)
    let [data1,changeData1]=useState("i am hungry")
    let hun=()=>{changeData1("i am full")}
    let inc=()=>{changeData(data+1)}
    let dec=()=>{changeData(data-1)}
    let res=()=>changeData(null)
    let cle=()=>{changeData(null)}
    return(
        <div>
        {data}
        <h1>{data1}</h1>
        <button onMouseOver={inc}>Inc</button>
        <button onMouseOver={dec}>Dec</button>
        <button onClick={res} onDoubleClick={cle}>Reset</button>
        <button onClick={hun}>Hungry</button>
        </div>
    )
}
export default IncDec