import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/app';
import { useState } from 'react';
import profilePicDummy from '../../assets/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';

const Header = () => {
  const [openList, setOpenList] = useState(false);

  const user = localStorage.getItem('user');
  const userEmail = JSON.parse(user).email;

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleOpenList = () => {
    setOpenList(!openList);
  };

  return (
    <div className='flex justify-between  bg-green-500'>
      <h2>Welcome {userEmail}</h2>
      {/* <input type='search' name='' id='' /> */}
      <div className='image relative'>
        <img
          src={profilePicDummy}
          alt='Profile Pic'
          className='profile w-6 h-6 bg-purple-800'
          onClick={handleOpenList}
        />
        {openList && (
          <div className='absolute w-40 right-24 border border-red-50 bg-yellow-300'>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
