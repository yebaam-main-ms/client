
import { FC, ReactElement } from 'react';
import AppRouter from './features/modules/AppRoutes'
import { BrowserRouter } from 'react-router-dom';

const App: FC = (): ReactElement => {

  // useEffect(() => {
  //   socketService.setupSocketConnection();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <div className="w-screen min-h-screen flex flex-col relative">
          <AppRouter />
          
        </div>
      </BrowserRouter>
    </>
  );
};


export default App
