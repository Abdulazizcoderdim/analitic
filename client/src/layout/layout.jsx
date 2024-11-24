import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import Provider from '../components/provider';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Provider />
      <Footer />
    </>
  );
};

export default Layout;
