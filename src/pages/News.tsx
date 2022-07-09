import React, { useContext, useState } from 'react';
import NewsList from '../components/NewsList';
import Title from '../components/Title';

const News: React.FC = () => {
    /* API key: 11f36560abbc420682b173cd9f801257 */
    /* url for news api service https://newsapi.org/v2/everything?q=tesla&from=2022-06-07&sortBy=publishedAt&apiKey=11f36560abbc420682b173cd9f801257 */
    
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='row pad1rem'>
            <Title style={{color: '#ef5350'}} className='col offset-l2 offset-xl1'>News</Title>
            <h5 style={{marginTop: 0, marginBottom: 30}} className='subtitle col m12 l8 offset-l2 xl10 offset-xl1'>Check out for the latest news in the World!</h5>
            <NewsList />
        </div>
    );
};

export default News;