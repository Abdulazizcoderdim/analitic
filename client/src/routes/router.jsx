import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import LayoutDashboard from '../layout/layout-dashboard';
import Auth from '../pages/Auth';
import Contacts from '../pages/contacts';
import ContactsDashboard from '../pages/contacts-dashboard';
import Dashboard from '../pages/Dashboard';
import BookmakersTable from '../pages/firm';
import Giveaway from '../pages/giveaway';
import FAQPage from '../pages/help';
import History from '../pages/history';
import Home from '../pages/home';
import Learning from '../pages/learning';
import Levels from '../pages/levels';
import Payout from '../pages/payout';
import Postbacks from '../pages/postbacks';
import Recovery from '../pages/Recovery';
import Ref from '../pages/ref';
import Register from '../pages/register';
import Reviews from '../pages/reviews';
import Streams from '../pages/Streams';
import Tariffs from '../pages/tariffs';
import Users from '../pages/users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tariffs',
        element: <Tariffs />,
      },
      {
        path: '/reviews',
        element: <Reviews />,
      },
      {
        path: '/firm',
        element: <BookmakersTable />,
      },
      {
        path: '/learning',
        element: <Learning />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/recovery',
        element: <Recovery />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/giveaway',
        element: <Giveaway />,
      },
    ],
  },
  {
    path: '/',
    element: <LayoutDashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/streams',
        element: <Streams />,
      },
      {
        path: '/dashboard/contacts',
        element: <ContactsDashboard />,
      },
      {
        path: '/dashboard/help',
        element: <FAQPage />,
      },
      {
        path: '/dashboard/levels',
        element: <Levels />,
      },
      {
        path: '/dashboard/ref',
        element: <Ref />,
      },
      {
        path: '/dashboard/payout',
        element: <Payout />,
      },
      {
        path: '/dashboard/postbacks',
        element: <Postbacks />,
      },
      {
        path: '/dashboard/users',
        element: <Users />,
      },
    ],
  },
]);
