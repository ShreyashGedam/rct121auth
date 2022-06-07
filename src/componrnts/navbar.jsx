import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div style={ {margin : "10px"} }>
            <Link style={ {margin : "10px"} } to='/'>Home</Link>
            <Link style={ {margin : "10px"} } to="/about">About</Link>
            <Link style={ {margin : "10px"} } to="/contact">Contact</Link>
            <Link style={ {margin : "10px"} } to="/users">Users</Link>
        </div>
    )
}