import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MENU } from './constants/menu';
import RootLayout from './RootLayout/RootLayout';
import { Reset } from 'styled-reset';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
    <Reset/>
    <SideBar/>
    <RootLayout>
      <Routes>
        {MENU.map(menu => <Route key={menu.id} path={menu.path} element={menu.element}/>)}
      </Routes>
    </RootLayout>
    </>
  );
}

export default App;
