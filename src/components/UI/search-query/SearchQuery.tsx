import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

const SearchQuery = () => {
    const {query, setQuery} = useContext(AuthContext); 

    return (
        <form className='row'>
            <div style={{border: '2px solid #e63e78', borderRadius: 6, overflow: 'hidden'}} className="input-field col m5 l5 offset-l2 xl5 offset-xl1">
                <input
                    value={query}
                    onChange={(e: any) => setQuery(e.target.value)}
                    id="search" 
                    type="search" 
                    style={{paddingLeft: 30}}
                    required />
                <label style={{top: 12, color: '#e63e78'}} className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i 
                    style={{top: 12}}
                    onClick={() => setQuery('')}
                    className="material-icons">close</i>
            </div>
        </form>
    );
};

export default SearchQuery;