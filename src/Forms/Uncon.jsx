import { useRef } from "react"

let Uncon=()=>{
    let name=useRef()
    let fetch=(e)=>{
        e.preventDefault()
        let nameChange=name.current.value
        console.log(nameChange);
        document.write(nameChange)
    }
    return(
        <div>
       <form action="">
        Name : <input type="text" ref={name} name="" id="" /><br />
        <button onClick={fetch}>Submit</button>
       </form>
        </div>
    )
}
export default  Uncon