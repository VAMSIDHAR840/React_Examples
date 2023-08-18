import { useRef } from "react"

let Calculation=()=>{
    let num1=useRef()
    let num2=useRef()
     let btn1=(e)=>{
        e.preventDefault()
        let a=Number(num1.current.value)
        let b=Number(num2.current.value)
        let x=a+b
        console.log(x);
     }


     let btn2=(e)=>{
        e.preventDefault()
        let a=num1.current.value
        let b=num2.current.value
        let x=a-b
        console.log(x);

     }

     let btn3=(xx)=>{
        xx.preventDefault()
   let a=num1.current.value
   let b=num2.current.value
   let x=a*b
   console.log(x);
     }
    return(
        <div>
         <form action="">

            <input type="number" name="" id="" ref={num1} />
            <input type="number" name="" id="" ref={num2} />
            <button onClick={btn1}>+</button>
            <button onClick={btn2}>-</button>
            <button onClick={btn3}>*</button>
         </form>
        </div>
    )
}
export default Calculation