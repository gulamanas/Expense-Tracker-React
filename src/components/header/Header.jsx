import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/app';
import { useState } from 'react';
import profilePicDummy from '../../assets/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [openList, setOpenList] = useState(false);

  const user = localStorage.getItem('user');
  const userEmail = JSON.parse(user).email;
  const displayName = JSON.parse(user).displayName;

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
    <div className='flex justify-between  bg-white p-4 '>
      <h2>
        Welcome <span className='font-bold '>{displayName ?? userEmail}</span>
      </h2>
      {/* <input type='search' name='' id='' /> */}
      <div className='image relative'>
        <img
          src={profilePicDummy}
          alt='Profile Pic'
          className='profile w-8 h-8 bg-purple-800'
          onClick={handleOpenList}
          // onMouseEnter={() => setOpenList(true)}
          // onMouseLeave={() => setOpenList(false)}
        />
        {openList && (
          <div className='absolute top-10 w-[200px] right-2 border border-red-50 p-5 flex flex-col gap-3 shadow-lg rounded-xl'>
            <span
              className='absolute top-0 right-0 cursor-pointer text-red-400 text-2xl hover:text-red-500 '
              onClick={() => setOpenList(false)}
            >
              <FontAwesomeIcon icon={faMultiply} />
            </span>
            <Link to='/accounts' className='hover:font-bold'>
              Profile
            </Link>
            <span
              onClick={handleLogout}
              className='cursor-pointer hover:font-bold'
            >
              Log Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
