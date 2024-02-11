import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='w-1/6 max-h-screen h-screen bg-blue-400 fixed'>
      <div className='brand_name bg-red-400'>Expenso</div>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/payment'>Payment</Link>
        </li>
        <li>
          <Link to='/mycards'>My Cards</Link>
        </li>
        <li>
          <Link to='/accounts'>Accounts</Link>
        </li>
        <li>
          <Link to='/reports'>Reports</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
        <li>
          <Link to='/help'>Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
