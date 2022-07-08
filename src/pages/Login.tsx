import React from 'react';
import Form from '../components/Form';
import Title from '../components/Title';

const Login: React.FC = () => {
    return (
        <div className='pad1rem'>
            <Title>Sign in</Title>
            <Form className="row" style={{marginTop: 30}}></Form>
        </div>
    );
};

export default Login;