import { useState } from "react"

let Confrom = () => {
    let [name, changeName] = useState("")
    let nameChange = (e) => { changeName(e.target.value) }
    let click = (e) => {
        e.preventDefault()
        console.log(name);
    }
    return (
        <div>
            <form action="">
                Name : <input type="text" value={name} onChange={nameChange} name="" id="" /><br />
                <button onClick={click}>Submit</button>
            </form>
        </div>
    )
}
export default Confrom