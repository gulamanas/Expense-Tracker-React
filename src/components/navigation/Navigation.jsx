/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import logo from '../../assets/expenso-logo.png';

const Navigation = () => {
  return (
    <div className='w-1/6 max-h-screen h-screen bg-white fixed'>
      <div className='flex items-center justify-center gap-3 p-3 font-medium text-xl'>
        <img src={logo} alt='Expense Logo' className='w-7 h-7' /> Expenso
      </div>
      <div className='flex flex-col justify-between h-[90%]'>
        <div className='flex flex-col'>
          <NavLink to='/'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Dashboard
              </span>
            )}
          </NavLink>
          <NavLink to='/payment'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Payment
              </span>
            )}
          </NavLink>
          <NavLink to='/mycards'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                My Cards
              </span>
            )}
          </NavLink>
          <NavLink to='/accounts'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Accounts
              </span>
            )}
          </NavLink>
          <NavLink to='/reports'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Reports
              </span>
            )}
          </NavLink>
        </div>
        <div className='flex flex-col'>
          <NavLink to='/settings'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Settings
              </span>
            )}
          </NavLink>
          <NavLink to='/help'>
            {({ isActive, isPending, isTransitioning }) => (
              <span
                className={`block p-3 ${
                  isActive ? 'bg-blue-500 text-white' : 'text-black'
                }`}
              >
                Help
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
