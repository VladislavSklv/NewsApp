import React, { useContext } from 'react';
import { AuthContext } from '../context';
import MyButton from '../components/UI/button/MyButton';
import Title from '../components/Title';

const Profile: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
        <div className='pad1rem row'>
            <Title>Profile</Title>
            <h5 style={{marginTop: 0, marginBottom: 30}} className='col m12 l8 offset-l2 xl10 offset-xl1'>This could be your profile page</h5>
            <MyButton 
                onClick={() =>{
                    setIsAuth(false);
                    localStorage.removeItem('auth');
                }}
                type='button'
                className='waves-effect waves-light btn red lighten-2 col s1 offset-s1'
            >Logout</MyButton>
        </div>
    );
};

export default Profile;