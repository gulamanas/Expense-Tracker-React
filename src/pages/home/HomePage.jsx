import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const HomePage = () => {
  // const user = localStorage.getItem('user')
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default HomePage;
