import React from 'react';
import Form from '../components/Form';

const Login: React.FC = () => {
    return (
        <div className='pad1rem'>
            <h1>Sign in</h1>
            <Form className="row" style={{marginTop: 30}}></Form>
        </div>
    );
};

export default Login;