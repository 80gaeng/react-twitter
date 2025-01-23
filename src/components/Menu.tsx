import { useNavigate } from 'react-router-dom';
import { BsHouse } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';

export default function MenuList() {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <div className='footer__grid'>
        <button type='button' onClick={() => navigate('/')}>
          <BsHouse />
          Home
        </button>
        <button type='button' onClick={() => navigate('/profile')}>
          <FaUserCircle />
          Profile
        </button>
        <button type='button' onClick={() => navigate('/')}>
          <IoMdLogOut />
          Logout
        </button>
      </div>
    </div>
  );
}
