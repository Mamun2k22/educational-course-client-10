import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { LogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        LogIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(e => console.error(e))



    }
    return (
        <div>

            <div>
                <div className='flex justify-center items-center pt-8'>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                        <div className='mb-8 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Log in</h1>
                            <p className='text-sm text-dark'>
                                Login in to access your account
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Enter Your Email Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>


                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='text-sm mb-2'>
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='*****'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                                    />
                                </div>
                            </div>
                            {/* <p className='text-red-500	'>{error}</p> */}
                            <div>
                                <button

                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Log In
                                </button>
                            </div>
                        </form>


                        <p className='px-6 text-sm text-center text-dark'>
                            Don't have an account yet?{' '}


                            <Link to='/register' className='hover:underline text-dark'>

                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
// login work is done

export default Login;