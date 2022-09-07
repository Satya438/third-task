import React from "react"
import Form from "./Addtourist"
import 'bootstrap/dist/css/bootstrap.min.css';

const Touristtable = ({ tourists, postTourist, updateTourist, deleteTourist }) => {
    debugger;
    const showUpdateUser = id => {
        const form = document.getElementsByClassName(`show-form-${id}`)
        form[0].classList.toggle("hide-form")
    }

    const Row = ({ tourist }) => {
        return (
            <>
                <div className='row'>
                    <div className='col-sm-2'>{tourist.tourist_name}</div>
                    <div className='col-sm-3'>{tourist.tourist_email}</div>
                    <div className='col-sm-3'>{tourist.tourist_location}</div>
                    <div className='col-sm-4 buttons'>
                        <button className="btn btn-info"  onClick={() => showUpdateUser(tourist.id)}>Update</button>
                        <button  className="btn btn-danger" onClick={() => deleteTourist(tourist.id)}>delete</button>
                    </div>
                </div>
                <div className={`hide-form show-form-${tourist.id}`}>
                    <Form userData={tourist} postTourist={postTourist} updateTourist={updateTourist} />
                </div>
            </>
        )
    }

    return (
        <div className='table'>
            <div className='row'>
                <div className='col-sm-2'>Name</div>
                <div className='col-sm-3'>Email</div>
                <div className='col-sm-3'>Location</div>
                <div className='col-sm-4'>Actions</div>
            </div>
            <div className='rows'>
                {tourists && tourists.map(u => <Row tourist={u} key={u.id} />)}
            </div>
        </div>
    )
}

export default Touristtable