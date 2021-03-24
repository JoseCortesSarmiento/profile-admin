import React from 'react'

const List = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>mark@mail.com</td>
                <td>somewhere #123</td>
                <td>1234567</td>
                <input className="btn btn-info"  value="Edit" type="submit"/>
                <input className="btn btn-danger" value="Delete" type="submit"/>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>jacob@mail.com</td>
                <td>somewhere #123</td>
                <td>1234567</td>
                <input className="btn btn-info"  value="Edit" type="submit"/>
                <input className="btn btn-danger" value="Delete" type="submit"/>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>larry@mail.com</td>
                <td>somewhere #123</td>
                <td>1234567</td>
                <input className="btn btn-info"  value="Edit" type="submit"/>
                <input className="btn btn-danger" value="Delete" type="submit"/>
                </tr>
            </tbody>
        </table>
    )
}

export default List