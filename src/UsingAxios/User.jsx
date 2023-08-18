import { Fragment, useState } from "react"
import user from "./user.module.css"
import UserData from "./UserData.json"
let User = () => {
    let [data] = useState(UserData)
    return (
        <div>
            {
                data.map((e) => {
                    return (
                        <div >
                            <Fragment key={e.id}>
                                <h1 id={user.abc}>{e.id} </h1>
                                <h1>{e.title} </h1>
                                <img src={e.url} alt="" />
                            </Fragment>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default User