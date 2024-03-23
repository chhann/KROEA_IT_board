import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BOARD } from './constants/menu';
import RootLayout from './components/RootLayout/RootLayout';
import { Reset } from 'styled-reset';
import SideBar from './components/SideBar/SideBar';
import AuthRoute from './Routes/AuthRoute';


function App() {
  return (
    <>
    <Reset/>
    <RootLayout>
    <SideBar/>
      {/* <Routes>
        {BOARD.map(menu => <Route key={menu.id} path={menu.path} element={menu.element}/>)}
      </Routes> */}
      <AuthRoute/>
    </RootLayout>
    </>
  );
}

export default App;
