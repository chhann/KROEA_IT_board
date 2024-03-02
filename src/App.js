import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MENU } from './constants/menu';
import RootLayout from './RootLayout/RootLayout';
import { Reset } from 'styled-reset';

function App() {
  return (
    <>
    <Reset/>
    <RootLayout>
      <Routes>
        {MENU.map(menu => <Route key={menu.id} path={menu.path} element={menu.element}/>)}
      </Routes>
    </RootLayout>
    </>
  );
}

export default App;
