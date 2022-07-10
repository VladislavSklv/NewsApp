import React, { useContext } from 'react';
import { AuthContext } from '../../../context';

const MySelector: React.FC = (): any => {
    const {setSelector} = useContext(AuthContext);

    return (
        <div style={{marginTop: 23}} className="input-field col s12 m4 l3 offset-l2 xl3 offset-xl1">
            <select onChange={(e): any => setSelector(e.target.value)} style={{border: '2px solid #e63e78', borderRadius: 6}} className='browser-default' defaultValue={'publishedAt'}>
                <option value="publishedAt" >Published time</option>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
};

export default MySelector;