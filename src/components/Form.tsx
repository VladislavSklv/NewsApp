import React, { useContext, useState } from 'react';
import { AuthContext } from '../context';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const Form = ({...args}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div {...args}>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <MyInput 
                        value={login}
                        onChange={(e: any) => setLogin(e.target.value)}
                        required 
                        id="first_name" 
                        type="text" 
                        className="validate input-js" />
                    <label htmlFor="first_name">Login</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <MyInput 
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        required 
                        id="password" 
                        type="password" 
                        className="validate input-js" />
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                <MyButton 
                    onClick={(e: any): void => {
                        e.preventDefault();
                        document.querySelectorAll('.input-js').forEach((input: any) => {
                            if(login == 'admin' && password == '12345'){
                                setIsAuth(true);
                                localStorage.setItem('auth', 'true');
                            }
                        });
                    }}
                    className="btn waves-effect waves-light red lighten-2" 
                    type="submit" 
                    name="action"
                >Submit
                    <i className="material-icons right">send</i>
                </MyButton>
            </form>
        </div>
    );
};

export default Form;