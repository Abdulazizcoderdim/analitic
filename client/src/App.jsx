import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Provider from './components/provider';
import { router } from './routes/router';
import { authStore } from './store/auth.store';

const App = () => {
  const { setIsAuth } = authStore();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Provider />
      <Toaster />
    </>
  );
};

export default App;
