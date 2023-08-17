import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {BASE_URL} from "../../../server/server"
function UserApi() {
    let [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`${BASE_URL}/api/user/64ca433566debb4bf48d9afb`).then(response => {
        })
    }, [])




    return (
        <div>UserApi</div>
    )
}

export default UserApi