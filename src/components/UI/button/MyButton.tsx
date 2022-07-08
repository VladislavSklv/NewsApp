import React from 'react';

const MyButton = ({children, ...args}: any) => {
    return (
        <button {...args}>
            {children}
        </button>
    );
};

export default MyButton;