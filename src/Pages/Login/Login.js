import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //getting users info
    const handelLogin = event =>{
        event.preventDefault();
    }

    return (
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className='text-xl text-center mt-5 font-bold text-blue-600'>Login Here</h2>

                <form onSubmit={handelLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control ">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center mb-6'>New to this site? <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
            </div>
    );
};

export default Login;