import { Navigate, Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';

const Protected = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  let userToken =
    user != null ? JSON.parse(user).stsTokenManager.accessToken : '';

  return token === userToken ? (
    <div className='flex'>
      <Navigation />
      <div className='w-5/6 ml-[16.67%] flex flex-col'>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default Protected;
