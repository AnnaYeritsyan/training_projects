import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import { userSelectors } from 'store/users/config';
import Logout from './components/LogOut/Logout';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import HomeWrapper from './components/Page/HomeWrapper';
import Dashboard from './components/Dashboard/Dashboard';
import { useAppSelector } from 'store';
import Weather from 'components/Weather/Weather';


function App() {
  const user = useAppSelector(userSelectors.selectUser);
  return (
    <>
     {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          {user ? (
          <>
      
            <Route path="/" element={<HomeWrapper/>} >
              <Route index element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/weather' element={<Weather/>}/>
            </Route>

            </>

            
          ) : (
            <Route index element={<SignIn />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
