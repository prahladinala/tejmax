import React from "react"
import { Link } from "react-router-dom"

const UserDashboard = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5">User Dashboard</h1>
                <p className="mb-5">Check your latest transactions and bookings</p>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Movie</th>
                        <th scope="col">Theatre</th>
                        <th scope="col">Date-Time</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Avengers</td>
                        <td>Theatre 1</td>
                        <td>May 11, 2021 - 12:30PM</td>
                        <td>$ 10</td>
                        <td><span class="badge badge-warning">Yet to come</span>
                        </td>

                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Pirates</td>
                        <td>Theatre 2</td>
                        <td>May 7, 2021 - 9:30PM</td>
                        <td>$ 12</td>
                        <td><span class="badge badge-success">Watched</span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Indiana Jones</td>
                        <td>Theatre 3</td>
                        <td>May 1, 2021 - 12:30PM</td>
                        <td>$ 8</td>
                        <td><span class="badge badge-success">Watched</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link className="btn btn-info mb-4" to="/movies" >Check the Latest Movies</Link>
        </div>
    )
}

export default UserDashboard