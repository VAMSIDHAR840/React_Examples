let DarkandLight=()=>{
    let dark=()=>{
        document.body.style.background="yellow"
        document.body.style.color='black'
    }
    let light=()=>{
        document.body.style.background="pink"
        document.body.style.color="cyan"
    }
    return(
        <div>
        <input type="radio" name="aa" id="" onClick={dark} />Dark
        <input type="radio" name="aa" id="" onClick={light} />Light
        </div>
    )
}
export default DarkandLight