import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

const Pagination = ({pages}: any) => {
    const {page, setPage} = useContext(AuthContext);

    return (
        <ul className="pagination">
            {pages.map((p: number) => {
                if(p == page) return <li key={p} onClick={() => setPage(p)} className="waves-effect active"><a>{p}</a></li>
                return <li key={p} onClick={() => setPage(p)} className="waves-effect"><a>{p}</a></li>
            })}
        </ul>
    );
};

export default Pagination;