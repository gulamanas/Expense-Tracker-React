import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log(user.accessToken);
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={submitHandler} className=''>
        <h2 className='text-3xl font-semibold uppercase text-center mb-4'>
          Log in
        </h2>
        <div className='flex flex-col gap-2 items-center'>
          <label htmlFor='email' className='self-start font-semibold '>
            Email ID
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            className='border border-gray-400 p-2 rounded outline-none w-full'
            placeholder='test@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password' className='self-start font-semibold '>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            className='border border-gray-400 p-2 rounded outline-none w-full'
            placeholder='123456'
            onChange={(e) => setPassword(e.target.value)}
          />
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
  );
};

export default LoginPage;
