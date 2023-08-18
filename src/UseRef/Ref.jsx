import { useRef } from "react"

let Ref = () => {
    let demoRef = useRef()
    let color = () => {
        demoRef.current.style.color='red'
        demoRef.current.style.background='yellow'
    }
    return (
        <div>
            <h1 ref={demoRef}>Vamsi</h1>
            <button onClick={color}>ChangeColor</button>
        </div>
    )
}
export default Ref