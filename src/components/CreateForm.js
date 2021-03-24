import React from 'react'

const CreateForm = () => {
    return (
        <div className="container my-auto">
            <form className="form-group">
                <input placeholder="Name" className="form-control mb-3" type="text"/>
                <input placeholder="Email" className="form-control mb-3" type="text"/>
                <input placeholder="Address" className="form-control mb-3" type="text"/>
                <input placeholder="Phone" className="form-control mb-3" type="text"/>
                <input placeholder="Job" className="form-control mb-3" type="text"/>
                <input className="btn btn-info btn-block mb-3" type="submit"/>
            </form>
        </div>
    )
} 

export default CreateForm