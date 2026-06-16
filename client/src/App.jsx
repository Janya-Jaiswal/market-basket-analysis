import { RouterProvider } from 'react-router'
import {router} from './appRoutes/AllRoutes.jsx'

function App() {
 

  return (
    <>
   <RouterProvider router={router}>
    {/* <App /> */}
  </RouterProvider>,
    </>
  )
}

export default App
