import Sidebar from "../components/Sidebar/Sidebar"
import Content from "../components/Content/Content"
import { useState } from "react"




export default () => {
    const [user_fullname, setUser_fullname] = useState("Santa Claus")
    return (
        <div className="main">
            <Sidebar />
            <Content user_fullname={user_fullname} />
        </div>
    )
}