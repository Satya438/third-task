import React, { useState, useEffect } from "react"
import Form from "./Addtourist"
import Tablelist from "./Touristtable"
import 'bootstrap/dist/css/bootstrap.min.css';

import { restHelper } from "../httphelpers/restHelper"

const Crudtourists = () => {
    const [tourists, settourists] = useState(null)

    const url = "http://restapi.adequateshop.com/api/Tourist"
    const api = restHelper()

    useEffect(() => {
        gettourists()
    }, [])

    const postTourist = tourist => {
        api
            .postCreate(`${url}`, { body: tourist })
            .then(res => gettourists())
            .catch(err => console.log(err))
    }

    const updateTourist = (id, tourist) => {
        api
            .putUpdate(`${url}/${id}`, { body: tourist })
            .then(res => gettourists())
            .catch(err => console.log(err))
    }

    const deleteTourist = id => {
        api
            .deletedata(`${url}/${id}`, {})
            .then(res => gettourists())
            .catch(err => console.log(err))
    }

    const gettourists = () => {
        api
            .get(`${url}`)
            .then(res => {
                if(res && res.data)
                {
                    settourists(res.data)
                }
            })
            .catch(err => console.log(err))
    }
    if (!tourists) return null

    return (
        <>
            <h3>New user</h3>
            <Form postUser={postTourist} />
            <div className='container-fluid'>
                <h3>All users</h3>
                <Tablelist
                    tourists={tourists}
                    settourists={settourists}
                    postTourist={postTourist}
                    updateTourist={updateTourist}
                    deleteTourist={deleteTourist}
                />
            </div>
        </>
    )
}

export default Crudtourists