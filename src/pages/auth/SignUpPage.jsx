import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/app';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen '>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center h-screen '
      >
        <h2 className='text-3xl font-semibold uppercase text-center mb-4'>
          Sign Up
        </h2>
        <div className='flex flex-col gap-2 items-center sm:w-80 w-72'>
          <label htmlFor='email' className='self-start font-semibold'>
            Email ID
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='border border-gray-400 p-2 rounded outline-none w-full'
            value={email}
            placeholder='test@email.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password' className='self-start font-semibold'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='border border-gray-400 p-2 rounded outline-none w-full'
            value={password}
            placeholder='123456'
            onChange={(e) => setPassword(e.target.value)}
          />
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
  );
};

export default SignUpPage;
