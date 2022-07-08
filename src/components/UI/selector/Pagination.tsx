import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

const Pagination = ({pages, ...args}: any) => {
    const {page, setPage} = useContext(AuthContext);

    const toUp = (): void => {
        window.scrollTo(0, 0);
    }

    return (
        <ul {...args}>
            {pages.map((p: number) => {
                if(p == page) return <li key={p} onClick={() => {setPage(p); toUp();}} className="waves-effect active"><a>{p}</a></li>
                return <li key={p} onClick={() => {setPage(p); toUp();}} className="waves-effect"><a>{p}</a></li>
            })}
        </ul>
    );
};

export default Pagination;