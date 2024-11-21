import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { dashboardMenu } from '../../constants';
import { stateDashboard } from '../../store/dashboard';

const DashMobile = () => {
  const { pathname } = useLocation();
  const { setClose } = stateDashboard();

  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 bg-[#181722] md:hidden min-w-64 min-h-screen text-[#beb3b6]">
      <ul className="px-[10px] pt-[10px] relative">
        {dashboardMenu.map((item, i) => {
          const isActive = pathname === item.link;
          return (
            <li key={i}>
              <Link to={item.link}>
                <div
                  className={`flex hover:text-white items-center text-base p-4 rounded-full ${
                    isActive ? 'bg-[#2B293D] text-white' : ''
                  }`}
                >
                  <item.icon className="mr-3" />
                  <span>{item.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
        <span
          onClick={() => setClose(true)}
          className="absolute top-20 bg-[#2B293D] p-1 rounded-r-md cursor-pointer -right-8"
        >
          <X />
        </span>
      </ul>
    </div>
  );
};

export default DashMobile;
