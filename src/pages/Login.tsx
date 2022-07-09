import React from 'react';
import Form from '../components/Form';
import Title from '../components/Title';

const Login: React.FC = () => {
    return (
        <div className='pad1rem row'>
            <Title style={{color: '#ef5350'}} className='col offset-l2 offset-xl1'>Sign in</Title>
            <Form className="row s12 col offset-l2 offset-xl1" style={{marginTop: 30}}></Form>
        </div>
    );
};

export default Login;