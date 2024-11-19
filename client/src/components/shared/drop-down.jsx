import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/auth.store';
import Avatar from './avatar';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsAuth, setUser } = authStore();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      setIsAuth(false);
      setUser({});
      navigate('/auth');
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  //   const handleSelect = item => {
  //     setIsOpen(false);
  //     if (onSelect) onSelect(item);
  //   };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Avatar />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 border-b rounded-md text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              {localStorage.getItem('user')}
            </button>
          </div>
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={logout}
              className="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
