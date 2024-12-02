import { Link, useLocation } from 'react-router-dom';
import { dashboardMenu } from '../../constants';

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  
  return (
    <div className="bg-[#181722] max-md:hidden min-w-64 min-h-screen text-[#beb3b6] z-50">
      <div className="flex items-center justify-center bg-[#1F212D] py-1">
        <img
          src="/logodash.png"
          className="object-contain w-52 h-full"
          alt="Dashboard Logo"
        />
      </div>
      <ul className="px-[10px] pt-[10px]">
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
      </ul>
    </div>
  );
};

export default DashboardSidebar;
