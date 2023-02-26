import Link from "next/link";
import React from "react";
const signin = () => {
  return(
    <div>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        <p className="my-2">you dont have an account yet ?
          <Link legacyBehavior href = "/register"><a style={{color:'crimson'}}>Register</a>
          </Link>
        </p>
      </form>
    </div>
  )
}
export default signin;