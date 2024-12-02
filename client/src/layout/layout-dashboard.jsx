import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/dashboard-header';
import DashboardSidebar from '../components/dashboard/dashboard-sidebar';
import FooterDash from '../components/dashboard/footer-dash';

const LayoutDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      navigate('/auth');
    }
  }, []);

  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex flex-col w-full">
        <DashboardHeader />
        <Outlet />
        <FooterDash />
      </main>
    </div>
  );
};

export default LayoutDashboard;
