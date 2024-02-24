import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import expensoLogo from '../../assets/expenso-logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      // console.log(user.accessToken);
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='grid content-center items-center h-screen gap-16'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-semibold flex items-center text-primary-color gap-3'>
          <img
            src={expensoLogo}
            alt='Expenso App Logo'
            height={50}
            width={50}
          />
          Expenso
        </h2>
        <p className=''>Your Personal Expense Assistance</p>
        <p className=''>Let&apos;s Get Started</p>
      </div>
      <div className='flex justify-center items-center'>
        <form onSubmit={submitHandler} className=''>
          <h2 className='text-3xl font-semibold uppercase text-center mb-4'>
            Log in
          </h2>
          <div className='flex flex-col gap-2 items-center sm:w-80 w-72'>
            <label htmlFor='email' className='self-start font-semibold '>
              Email ID
            </label>
            <div className='relative w-full'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                className='border border-gray-400 rounded outline-none w-full pl-10 pr-4 py-2'
                placeholder='test@email.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <label htmlFor='password' className='self-start font-semibold '>
              Password
            </label>
            <div className='relative w-full'>
              <input
                type={showPassword ? 'password' : 'text'}
                id='password'
                name='password'
                value={password}
                className='border border-gray-400 rounded outline-none w-full pl-10 pr-10 py-2'
                placeholder='123456'
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'>
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            <button
              type='submit'
              className='border border-gray-700 bg-gray-700 text-white px-4 py-2 rounded hover:bg-transparent hover:text-gray-700 font-medium'
            >
              Log In
            </button>
          </div>
          <p className='mt-6'>
            Don&apos;t have an Account?
            <Link to='/signup' className='text-blue-600 ml-2'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
