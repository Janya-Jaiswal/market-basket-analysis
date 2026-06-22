import AllRoutes from './appRoutes/AllRoutes.jsx';

import { GlobalLoader, GlobalNotification } from './components/GlobalUI.jsx';

function App() {
  return (
    <>
      <GlobalLoader />
      <GlobalNotification />
      <AllRoutes />
    </>
  );
}

export default App;
