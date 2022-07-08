import React from 'react';
import Title from '../components/Title';

const Main: React.FC = () => {
    return (
        <div className='pad1rem row'>
            <Title style={{color: '#ef5350'}} className='col offset-l2 offset-xl1'>Main page</Title>
            <h5 style={{marginTop: 0, marginBottom: 30}} className='col m12 l8 offset-l2 xl10 offset-xl1'>This project is maden for impoving skills in React, React-Router-DOM and TypeScript</h5>
        </div>
    );
};

export default Main;