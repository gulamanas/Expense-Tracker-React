import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  console.log({ user });
  let userToken =
    user != null ? JSON.parse(user).stsTokenManager.accessToken : '';

  return token === userToken ? <Outlet /> : <Navigate to='/login' />;
};

export default Protected;
