import React, { useState } from "react"


const Addtourist = ({ userData = {}, postUser, updateTourist }) => {
    const [user, setUser] = useState({
        id:userData.id ?? 0,
        tourist_name: userData.tourist_name ?? "",
        tourist_email: userData.tourist_email ?? "",
        tourist_location: userData.tourist_location ?? "",
    })

    const handleValue = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitUser = e => {
        e.preventDefault()
        debugger;
        if (user.tourist_name === "" || user.tourist_email === "" || user.tourist_location === "") return

        if (userData.id) {
            debugger;
            updateTourist(userData.id, user)
        } else {
            postUser(user)
        }
        setUser({ ...user, "tourist_name": "","tourist_email": "","tourist_location": "" })
    }

    return (
        <form onSubmit={submitUser} className='form-inline'>
            <div className="form-group">
            <input
                type='text'
                name='tourist_name'
                className="form-control"
                value={user.tourist_name}
                placeholder='Name'
                onChange={e => handleValue(e)}
            />
            </div>
            <div className="form-group">
            <input
                type='email'
                name='tourist_email'
                className="form-control"
                value={user.tourist_email}
                placeholder='Email'
                onChange={e => handleValue(e)}
            />
            </div>
            <div className="form-group">
            <input
                type='text'
                name='tourist_location'
                className="form-control"
                value={user.tourist_location}
                placeholder='location..'
                onChange={e => handleValue(e)}
            />
            </div>
            <input
                className='btn btn-primary btnsubmit'
                type='submit'
                value={`${!userData.id ? "Add new user" : "Save user"}`}
            />
        </form>
    )
}

export default Addtourist