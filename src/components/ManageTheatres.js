import React from 'react'
import { Link } from 'react-router-dom'
const ManageTheatres = () => {
    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
    )

    return (
        <div className="container">
            <h1 className="text-center">Manage Theatres</h1>
            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    {goBack()}
                </div>
            </div>
        </div>
    )
}
export default ManageTheatres