import React from "react"
import { Link } from "react-router-dom"

const ManageBookings = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5">Manage Bookings</h1>
                <p className="mb-5">Check your latest bookings</p>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Movie</th>
                        <th scope="col">Theatre</th>
                        <th scope="col">Status</th>
                        <th scope="col">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>7867</td>
                        <td>Rahul</td>
                        <td>Avengers</td>
                        <td>Theatre 1</td>
                        <td><span class="badge badge-warning">Pending</span>
                        </td>
                        <td><button className="btn btn-info">Get Info</button></td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>9875</td>
                        <td>Teja</td>
                        <td>Pirates</td>
                        <td>Theatre 3</td>
                        <td><span class="badge badge-success">Confirmed</span>
                        </td>
                        <td><button className="btn btn-info">Get Info</button></td>

                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>7758</td>
                        <td>Ramesh</td>
                        <td>Indiana Jones</td>
                        <td>Theatre 4</td>
                        <td><span class="badge badge-success">Confirmed</span>
                        </td>
                        <td><button className="btn btn-info">Get Info</button></td>

                    </tr>
                </tbody>
            </table>
            <Link className="btn btn-info mb-4" to="/admin/dashboard" >Go to Admin Home</Link>
        </div>
    )
}

export default ManageBookings