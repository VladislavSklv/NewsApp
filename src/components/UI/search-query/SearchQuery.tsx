import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context';

const SearchQuery = () => {
    const {query, setQuery} = useContext(AuthContext); 

    return (
        <form>
            <div style={{border: '2px solid #e63e78', borderRadius: 6, overflow: 'hidden'}} className="input-field col s12 offset-m2 m6 l4 offset-l1 xl5 offset-xl2">
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