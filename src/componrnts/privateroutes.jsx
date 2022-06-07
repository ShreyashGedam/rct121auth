import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/auth"

export const Private = ({children }) => {

    const [auth , setAuth] = useContext(AuthContext)

    if(auth) {
        return children
    }

    return <Navigate to={ "/login"}></Navigate>

}