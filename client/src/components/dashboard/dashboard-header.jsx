import axios from 'axios';
import { LoaderCircle, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { CiCalendarDate } from 'react-icons/ci';
import { IoPersonCircleOutline, IoPowerOutline } from 'react-icons/io5';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { authStore } from '../../store/auth.store';
import { stateDashboard } from '../../store/dashboard';
import DashMobile from './dash-mobile';

const DashboardHeader = () => {
  const { isOpen, setOpen } = stateDashboard();
  const [modal, setModal] = useState(false);
  const ref = useRef(null);
  const { setIsAuth, setUser } = authStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const closeModal = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  const logout = async () => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_PUBLIC_API}/api/auth/logout`);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      setIsAuth(false);
      setUser({});
      navigate('/auth');
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="w-full fixed right-0 left-0 top-0 z-20">
        <div className="flex justify-between bg-white max-md:bg-[#181722]">
          <div className="md:hidden flex items-center pl-5 gap-2">
            <div className="cursor-pointer" onClick={() => setOpen(true)}>
              <Menu className="text-white text-2xl" />
            </div>
            <img src="/logodash.png" width={147} alt="logo" />
          </div>
          <div className="text-end w-full flex items-center justify-end py-3 pr-5">
            <p className="mr-4 text-2xl text-[#4f5163] font-normal">
              Баланс: 0.00
            </p>
            <div className="relative">
              <div
                onClick={() => setModal(prev => !prev)}
                className="p-2 rounded-full bg-[#4f5163] text-white text-xl hover:bg-blue-700 cursor-pointer"
              >
                <MdPersonAddAlt1 />
              </div>
              {modal && (
                <div
                  ref={ref}
                  className="absolute text-[#4f5163] -bottom-20 shadow-lg translate-y-1/2 right-0 w-52 rounded-md bg-white border"
                >
                  <div className="flex flex-col py-2">
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100/80 hover:text-blue-500"
                    >
                      <IoPersonCircleOutline size={20} />
                      <span>Профиль</span>
                    </Link>
                    <Link
                      to="/dashboard/levels"
                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100/80 hover:text-blue-500"
                    >
                      <CiCalendarDate size={20} />
                      <span>Отчисления</span>
                    </Link>
                    <div className="w-full bg-[#d5d6da] h-[0.5px]" />
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100/80 hover:text-blue-500"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2 text-gray-400">
                          <LoaderCircle size={20} className="animate-spin" />
                          <span>Загрузка...</span>
                        </div>
                      ) : (
                        <>
                          <IoPowerOutline size={20} />
                          <span>Выход</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <DashMobile />}
    </>
  );
};

export default DashboardHeader;
