import React, { useContext } from 'react';
import { AuthContext } from '../context';
import MyButton from './UI/button/MyButton';

const Profile: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className='pad1rem'>
            <h1>Profile</h1>
            <h5>This could be your profile page</h5>
            <MyButton 
                onClick={() =>{
                    setIsAuth(false);
                    localStorage.removeItem('auth');
                }}
                type='button'
                className='waves-effect waves-light btn red lighten-2'
            >Logout</MyButton>
        </div>
    );
};

export default Profile;