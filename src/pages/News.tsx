import React, { useContext, useState } from 'react';
import NewsList from '../components/NewsList';
import Pagination from '../components/UI/selector/Pagination';
import { AuthContext } from '../context';

const News: React.FC = () => {
    /* API key: 11f36560abbc420682b173cd9f801257 */
    /* url for news api service https://newsapi.org/v2/everything?q=tesla&from=2022-06-07&sortBy=publishedAt&apiKey=11f36560abbc420682b173cd9f801257 */
    
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='pad1rem'>
            <h1>News</h1>
            <NewsList />
            <Pagination pages={pages} />
        </div>
    );
};

export default News;