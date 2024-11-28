import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { authStore } from './store/auth.store';

const App = () => {
  const { setIsAuth } = authStore();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsAuth(true);
      router.navigate('/dashboard');
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
