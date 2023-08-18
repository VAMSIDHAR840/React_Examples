import React from "react";
let Count=(x)=>{
    console.log("" + x.children);
    return(
        <div>
         <h1>
          {x.children}  {x.data}
         </h1>
        </div>
    )
}
export default React.memo(Count) 