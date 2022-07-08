import React from 'react';

const Title = ({children}: any) => {
    return (
        <div className='row'>
            <h1 style={{color: '#ef5350'}} className='col offset-l2 offset-xl1'>{children}</h1>
            <hr style={{marginTop: 20, marginBottom: 10, border: 'none', height: 2, borderRadius: 4}} className='col s12 m12 offset-m0 l8 offset-l2 xl10  offset-xl1 red lighten-2'/>
        </div>
    );
};

export default Title;