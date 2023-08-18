import axios from "axios"
import { useEffect, useState } from "react"

let AlltheData=()=>{
    let [data,changeData]=useState([])
    let [id,changeId]=useState(0)
    let [btn,changeBtn]=useState(id)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${btn}`)
        .then((e)=>{
            changeData(e.data)
        })
    },[btn])
    let idChange=(e)=>{changeId(e.target.value)}

   let click=()=>{
    changeBtn(id)
   }
    return(
        <div>
        <input type="text" value={id} onChange={idChange} name="" id="" />
        <button onClick={click}>Fetch</button>
        <h1>
            {data.id}
        </h1>
        <h4>
            {data.title}
        </h4>
        </div>
    )
}
export default AlltheData













// let AlltheData=()=>{
//     let [data,changeData]=useState([])
//     let [id,changeId]=useState(0)
//     useEffect(()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
//         .then((e)=>{
//             changeData(e.data)
//         })
//         .catch(()=>{
//             console.log("Fishy");
//         })
//     },[id])

//     let idChange=(e)=>{
//         changeId(e.target.value)
//     }
//     return(
//         <div>
//       <input type="text" value={id} onChange={idChange} name="" id="" />
//       <h1>
//         {data.id}
//       </h1>
//       <h1>
//         {data.name}
//       </h1>
//         </div>
//     )
// }
// export default AlltheData











// let AlltheData=()=>{
//     let [data,changeData]=useState([])
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/comments")
//         .then((e)=>{
//             changeData(e.data)
//         })
//     })
//     return(
//         <div>
//           {
//             data.map((e)=>{
//                 return(
//                     <div>
//                         <h1>
//                             {e.id}
//                         </h1>
//                         <h6>
//                             {e.name}
//                         </h6>
//                     </div>
//                 )
//             })
//           }
//         </div>
//     )
// }
// export default  AlltheData