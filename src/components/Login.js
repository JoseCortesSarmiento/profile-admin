import React from 'react'

const Login = () => {
    return (
        <div className="container my-auto">
            <form className="form-group">
                <input placeholder="User" className="form-control mb-3" type="text"/>
                <input placeholder="Password" className="form-control mb-3" type="text"/>
                <input className="btn btn-info btn-block mb-3" type="submit"/>
            </form>
        </div>
    )
} 

export default Login