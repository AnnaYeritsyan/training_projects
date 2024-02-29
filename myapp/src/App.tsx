import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SignIn from './components/signIn/signIn';
import { userSelectors } from 'store/users/config';
import Logout from './components/LogOut/Logout';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import HomeWrapper from './components/Page/HomeWrapper';
import Dashboard from './components/Dashboard/Dashboard';
import { useAppSelector } from 'store';
import Weather from 'components/Weather/Weather';
import Chat from 'components/Chat/Chat';
import { useState, useEffect } from 'react';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import MoviePage from 'components/MoviePage/MoviePage';
import MovieAdmin from 'components/MoviePage/MovieAdmin/MovieAdmin';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useAppSelector(userSelectors.selectUser);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user:any) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  return (
    <>
     {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
          <>
      
            <Route path="/" element={<HomeWrapper/>} >
              <Route index element={<Home/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/weather' element={<Weather/>}/>
              <Route path='/chat' element={<Chat/>}/>
              <Route path='/videoPlayer' element={<VideoPlayer />}/>
              <Route path='/moviePage' element={<MoviePage/>}/>
              <Route path='/movieAdmin' element={<MovieAdmin/>}/>
            </Route>

            </>

            
          ) : (
            <Route index element={<SignIn onLogin={handleLogin}  />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
