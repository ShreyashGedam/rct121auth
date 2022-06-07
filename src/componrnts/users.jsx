import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Users = () => {

    const [loading , setLoading] = useState(true)
    const [data1 , setData] = useState([])

    useEffect( () => {
        setLoading(true)

        axios({
            url : "https://reqres.in/api/users",
            method : "GET"
        })
        .then( (res) => {
            setLoading(false)
            setData(res.data.data)
        })
        .catch( (err) => {
            setLoading(false)
            console.log(err)
        })
    } , [] )

    return (
        <div>
            {loading && <div>Loading</div>}

            {data1?.map( (item) => (
                <div key={item.id}>
                    <div>{item.first_name}</div>
                    <div>{item.email}</div>
                    <Link to={`/users/${item.id}`} >See more</Link>
                </div>             
            ))}

        </div>
    )
}