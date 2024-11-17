import { RouterProvider } from 'react-router-dom';
import Provider from './components/provider';
import { router } from './routes/router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Provider />
      
    </>
  );
};

export default App;
