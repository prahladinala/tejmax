import React from "react"

export default function NotFound() {
    return (
        <div className="container">
            <h1 className="py-5">Signup to Tej Max</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputFirstName">First Name</label>
                    <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="First Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputLastName">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Last Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPhone">Phone Number</label>
                    <input type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp" placeholder="Phone Number" />
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}
