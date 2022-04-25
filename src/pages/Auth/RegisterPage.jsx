import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../firebase";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    //to change registration handling
    registerWithEmailAndPassword(name, email, password).then(()=>navigate('/')).catch((err)=>{console.log(err)})
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
    if (error) alert("FREKIN ERROR")
  }, [user, loading, error, navigate]);

  
  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Create new account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Already have an account?
            <Link
              to='/login'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              {" "}
              Login Here
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={(e) => e.preventDefault()}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label className='sr-only'>
                Name
              </label>
              <input
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Full Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className='sr-only'>
                Email address
              </label>
              <input
                name='email'
                type='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label  className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'

                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>


          <div>
            <button
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
