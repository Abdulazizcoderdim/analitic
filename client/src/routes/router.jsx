import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import Auth from '../pages/Auth';
import Contacts from '../pages/contacts';
import BookmakersTable from '../pages/firm';
import Giveaway from '../pages/giveaway';
import History from '../pages/history';
import Home from '../pages/home';
import Recovery from '../pages/Recovery';
import Register from '../pages/register';
import Reviews from '../pages/reviews';
import Tariffs from '../pages/tariffs';
import Learning from '../pages/learning';

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
]);
