import Link from 'next/link'
import Head from 'next/head'
import React, { useState , useContext} from "react";
import valid from '@/utils/valid'
import { DataContext } from '../store/GlobalState';
import { postData } from '@/utils/fetchData';

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const [state , dispatch] = useContext(DataContext)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({type : 'NOTIFY', payload: {}})
  };

  const handlesubmit = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password , cf_password)
    if(errMsg) return dispatch({type : 'NOTIFY', payload : {error:errMsg} })
  
    dispatch({type : 'NOTIFY', payload: {loading: true}})

    const res = await postData('auth/register', userData)

    console.log(res)
  }

  return (
    <div>
      <div>
        <form
          className="mx-auto my-4"
          style={{ maxWidth: "500px" }}
          onSubmit={handlesubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              name="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <p className="my-2">
            Already have an account ?
            <Link legacyBehavior href="/register">
              <a style={{ color: "crimson" }}>Sign-in</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
