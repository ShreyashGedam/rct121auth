import { Route, Routes } from "react-router-dom"
import { About } from "./componrnts/about"
import { Contact } from "./componrnts/contact"
import { Home } from "./componrnts/home"
import { Login } from "./componrnts/login"
import { Navbar } from "./componrnts/navbar"
import { Private } from "./componrnts/privateroutes"
import { Users } from "./componrnts/users"
import { Userspage } from "./componrnts/userspage"

function App() {

  console.log(import.meta.env.VITE_APP_TITLE)
  

  return (
    <div style={ {textAlign : "center"}}>
       <h2>{import.meta.env.VITE_APP_TITLE}</h2>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/users" element={
        <Private>
          <Users></Users>
        </Private>
        }></Route>
        <Route path="/users/:id" element={<Userspage></Userspage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
