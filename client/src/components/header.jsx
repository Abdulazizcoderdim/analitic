import { useState } from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { navItems } from '../constants';
import MaxWidth from './shared/max-width';

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MaxWidth className="bg-[#0D2324]">
        <header className="flex items-center justify-between gap-3">
          <img
            onClick={() => navigate('/')}
            loading="lazy"
            src="/white_on_trans.png"
            alt="logo"
            className="max-md:mx-auto w-36 h-32 cursor-pointer object-cover"
          />

          <div className="flex items-center gap-8 text-white max-md:hidden">
            <div className="flex flex-col">
              <p className="flex items-center gap-1 hover:underline cursor-pointer">
                <Link
                  to={'https://t.me/zuneros'}
                  className="flex items-center gap-1 text-lg font-bold hover:underline cursor-pointer"
                >
                  <BiLogoTelegram />
                  @zuneros
                </Link>
              </p>
              <p className="text-xs text-brown font-normal">
                Пн-пт: с 10:00 до 19:00 (Мск)
              </p>
            </div>
            <div className="flex items-center gap-4">
              {localStorage.getItem('accessToken') ? (
                <Link
                  to={'/dashboard'}
                  className="border-2 border-brown rounded-lg  px-7 py-2 font-normal text-lg hover:bg-brown transition-all duration-300"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to={'/auth'}
                  className="border-2 border-brown rounded-lg  px-7 py-2 font-normal text-lg hover:bg-brown transition-all duration-300"
                >
                  Войти
                </Link>
              )}
            </div>
          </div>
        </header>
      </MaxWidth>
      <div className="bg-lighBlue mx-auto w-full py-3 transition-all duration-200">
        <ul className="flex items-center justify-center gap-5 text-white max-md:hidden">
          {navItems.map((item, i) => (
            <li key={i} className="lg:text-lg text-base font-normal">
              <Link to={item.link} className="hover:opacity-100 opacity-80">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden border  border-[#9AC5C7]/30 rounded-md px-4 py-1 cursor-pointer"
          >
            <FiMenu className="text-3xl text-[#9AC5C7]" />
          </button>
        </div>

        {open && (
          <div className="md:hidden space-y-2 min-h-64 px-4 w-full transition-all duration-200 text-white ">
            <ul className="space-y-2 ">
              <li className="hover:opacity-100 opacity-80 cursor-pointer text-lg">
                <Link to="https://t.me/zuneros ">
                  Telegram: <span className="font-bold">@zuneros</span>
                </Link>
              </li>
              <li className="hover:opacity-100 opacity-80 cursor-pointer text-sm">
                Пн-пт: с 10:00 до 19:00 (Мск) Войти
              </li>
              <li className="hover:opacity-100 opacity-80 cursor-pointer text-lg">
                <Link to="/auth">Войти</Link>
              </li>
            </ul>
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <li key={i} className="text-lg font-normal">
                  <Link to={item.link} className="hover:opacity-100 opacity-80">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
