import React from "react";
let Button=(x)=>{
    console.log(""+ x.children);
    return(
        <div>
      <button onClick={x.fun}>{x.children}</button>
        </div>
    )
}
export default React.memo(Button)