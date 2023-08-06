import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
function UserApi() {
    let [user, setUser] = useState({})
    useEffect(() => {
        axios.get("http://localhost:5000/api/user/64ca433566debb4bf48d9afb").then(response => {
            console.log(response.data);
        })
    }, [])




    return (
        <div>UserApi</div>
    )
}

export default UserApi