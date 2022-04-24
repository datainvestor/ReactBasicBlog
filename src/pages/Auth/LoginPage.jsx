import { useEffect, useState, } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
// import { LockClosedIcon } from '@heroicons/react/solid'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    

    //allows to keep the location of the route that we can redirect to the route directly instead of going back to previous route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate(from, {replace: true}); //use replace=true so that user does not go back to login page
      if (error) alert(error)
    }, [user, loading, error, navigate, from]);

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or
            <Link
              to='/register'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            > {" "} Sign Up Here Instead
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={(e) => e.preventDefault()}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
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

          <div className='flex items-center justify-between'>
            <div className='flex items-center'></div>
            <div className='text-sm'>
              <Link
                to='/'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                {" "}
                Forgot your password?{" "}
              </Link>
            </div>
          </div>

          <div>
            <button
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => logInWithEmailAndPassword(email, password)}
           >
          {/* <span classNameName="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon classNameName="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span> */}
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
