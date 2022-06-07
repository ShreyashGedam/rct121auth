import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const Userspage = () => {

    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
    const params = useParams()

    useEffect( () => {
        setLoading(true)

        axios({
            url : `https://reqres.in/api/users/${params.id}`,
            method : "GET"
        })
        .then( (res) => {
            setLoading(false)
            var x = res.data.data
            setData(x)
            // console.log(res.data.data)
            // console.log(data)
        })
        .catch( (err) => {
            setLoading(false)
            console.log(err)
        })
    } , [] )

    // console.log(data)

    return (
        <div>
            {loading && <div>Loading</div>}
            <div>
                <img src={data?.avatar} width="60px"></img>
                <div>Name : {data?.first_name}</div>
                <div>Last name : {data?.last_name}</div>
                <div>Email : {data?.email}</div>
            </div>

        </div>
        
    )
}