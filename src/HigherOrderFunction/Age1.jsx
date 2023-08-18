import Higher from "./Higher"
let Age1=(x)=>{
    return(
        <div>
           <h1>
            {x.data}
           </h1>
           <button onClick={x.fun}>Fetch</button>
        </div>
    )
}
export default Higher(Age1)