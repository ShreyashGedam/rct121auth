import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/auth"

export const Login = () => {

    const [auth , setAuth] = useContext(AuthContext)

    if(auth) {
        return <Navigate to="/users"></Navigate>
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={ () => setAuth(true)}>Login</button>
        </div>
    )
}