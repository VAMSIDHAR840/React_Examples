let Nav=(x)=>{
    return(
        <div>
        {/* <h1>Vamsi {x.data}</h1> */}
        {/* <h2> Cricketers One {x.a[0]}  two {x.a[1]}  three {x.a[2]} </h2> */}

        {/* <h3>Student details {x.xyz.name} {x.xyz.age} {x.xyz.place} </h3> */}


        <h6> {x.pqr[0].name} {x.pqr[0].use} </h6>
        <h6>{x.pqr[1].name} {x.pqr[1].use} </h6>
        <h6>{x.pqr[2].name} {x.pqr[2].use} </h6>
        </div>
    )
}
export default Nav