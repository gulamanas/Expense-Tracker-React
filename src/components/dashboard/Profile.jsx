import profileImage from '../../assets/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCreditCard, faPen } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className='flex flex-col p-5 w-52 items-center gap-2 border rounded border-blue-400'>
      <img
        src={profileImage}
        alt='Profile Image'
        width={100}
        className='outline-4 outline outline-blue-500 rounded-full'
      />
      <div className='flex justify-between items-center gap-4 w-full'>
        <p>Profile</p>
        <FontAwesomeIcon icon={faPen} />
      </div>
      <div className='flex justify-between items-center gap-4 w-full'>
        <p>Settings</p>
        <FontAwesomeIcon icon={faCog} />
      </div>
      <div className='flex justify-between items-center gap-4 w-full'>
        <p>Wallet</p>
        <FontAwesomeIcon icon={faCreditCard} />
      </div>
    </div>
  );
};

export default Profile;
