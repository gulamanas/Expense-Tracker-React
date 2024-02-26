import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/app';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

import expensoLogo from '../../assets/expenso-logo.png';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  // const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        // return setErrorMessage('Password does not match');
        return alert('Password does not match');
      }

      // setErrorMessage('');

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const confirmPasswordHandler = async (e) => {
    setConfirmPassword(e.target.value);

    // console.log({ password, confirmPassword });
    // if (password === confirmPassword) {
    //   setErrorMessage('');
    // } else {
    //   setErrorMessage('Password does not match');
    // }
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
      <div className='flex justify-center items-center  '>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center '
        >
          <h2 className='text-3xl font-semibold uppercase text-center mb-4'>
            Sign Up
          </h2>
          <div className='flex flex-col gap-2 items-center sm:w-80 w-72'>
            <label htmlFor='email' className='self-start font-semibold'>
              Email ID
            </label>
            <div className='relative w-full'>
              <input
                type='email'
                id='email'
                name='email'
                className='border border-gray-400 rounded outline-none w-full pl-10 pr-4 py-2'
                value={email}
                placeholder='test@email.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <label htmlFor='password' className='self-start font-semibold'>
              Password
            </label>
            <div className='relative w-full'>
              <input
                type={showPassword ? 'password' : 'text'}
                id='password'
                name='password'
                className='border border-gray-400 rounded outline-none w-full pl-10 pr-10 py-2'
                value={password}
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
            <label
              htmlFor='confirmPassword'
              className='self-start font-semibold'
            >
              Confirm Password
            </label>
            <div className='relative w-full'>
              <input
                type={showPassword ? 'password' : 'text'}
                id='confirmPassword'
                name='confirmPassword'
                className='border border-gray-400 rounded outline-none w-full pl-10 pr-10 py-2'
                value={confirmPassword}
                placeholder='123456'
                onChange={confirmPasswordHandler}
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
            {/* {errorMessage && (
            <p className='text-red-500 self-start'>{errorMessage}</p>
          )} */}
            <button
              type='submit'
              className='border border-gray-700 bg-gray-700 text-white px-4 py-2 rounded hover:bg-transparent hover:text-gray-700 font-medium'
            >
              Sign Up
            </button>
          </div>
          <p className='mt-6'>
            Already Registerd?
            <Link to='/login' className='text-blue-600 ml-2'>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
