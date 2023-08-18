import Higher from "./Higher"
let Access=(x)=>{
    return(
        <div>
         <h1>
            {x.data}
         </h1>
         <button onClick={x.fun}>Change</button>
        </div>
    )
}
export default  Higher(Access)
