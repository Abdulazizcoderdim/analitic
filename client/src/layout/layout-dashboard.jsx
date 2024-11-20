import { Outlet } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/dashboard-header';
import DashboardSidebar from '../components/dashboard/dashboard-sidebar';

const LayoutDashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex flex-col">
        <DashboardHeader />
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
