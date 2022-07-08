import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Login from '../pages/Login';
import Main from '../pages/Main';
import News from '../pages/News';
import Navbar from './Navbar';
import Profile from '../pages/Profile';

const AppRouter: React.FC = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Navbar />
            {isAuth
                ?
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/news' element={<News />}/>
                    <Route path='/login' element={<Navigate to='/' replace={true}/>}/>
                </Routes>
                :
                <Routes>
                    <Route path='/' element={<Main />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/*' element={<Navigate to='/login' replace={true}/>}/>
                </Routes>
            }
        </BrowserRouter>
    );
};

export default AppRouter;