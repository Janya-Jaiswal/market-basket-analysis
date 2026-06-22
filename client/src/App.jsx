import { RouterProvider } from 'react-router';
import { router } from './appRoutes/AllRoutes.jsx';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>,
    </>
  );
}

export default App;
