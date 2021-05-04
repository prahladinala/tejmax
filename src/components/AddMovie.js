import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTheatres } from '../admin/adminapicall'

const AddMovie = () => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        photo: "",
        theatres: [],
        theatre: "",
        loading: false,
        error: "",
        addedMovie: "",
        getaRedirect: false,
        formData: ""
    })

    const { name, description, price, stock, theatres, theatre, loading, error, addedMovie, getaRedirect, formData } = values

    const preload = () => {
        getTheatres().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.err })
            } else {
                setValues({ ...values, theatres: data, formData: new FormData() })
            }
        })
    }
    useEffect(() => {
        preload()
    }, [])
    const createProductForm = () => (
        <form >
            <span>Post photo</span>
            <div className="form-group">
                <label className="btn btn-block btn-info">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                >
                    <option>Select</option>
                    {theatres && theatres.map((thea, index) => (
                        <option key={index} value={thea._id}>{thea.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("quantity")}
                    type="number"
                    className="form-control"
                    placeholder="Quantity"
                    value={stock}
                />
            </div>

            <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
                Create Product
          </button>
        </form>
    );

    const onSubmit = () => { }
    const handleChange = name => event => {
        const value = name === "photo" ? event.target.file[0] : event.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }
    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
    )

    return (
        <div className="container">
            <h1 className="text-center">Add a new Movie</h1>
            <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                    {goBack()}
                    {createProductForm()}
                </div>
            </div>
        </div>
    )
}
export default AddMovie
