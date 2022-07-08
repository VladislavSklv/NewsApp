import React, { useContext, useEffect, useState } from 'react';
import { fetchNews } from '../async/FetchNews';
import { AuthContext } from '../context';

const NewsList = () => {
    const [limit, setLimit] = useState(10);
    const {page} = useContext(AuthContext);
    const news: any[] = [];

    /* useEffect(() => {
        response = fetchNews(page, limit)
        useNews(response);
    }, [page, limit]); */

   /*  const response = useNews({page, limit}); */

    useEffect(() => {
        fetchNews(page, limit)
        .then((res: any) => {
            res.articles.forEach((article: any) =>{
                news.push(article);
            })
        })
    }, [page, limit])

    return (
        <div>
            {news.length != 0
                ?
                news.map((art: any) => 
                    <div>
                        <h3>{art.author}</h3>
                        <h4>{art.title}</h4>
                        <div>{art.content}</div>
                        <div><img style={{width: "100%"}} src={art.urlToImage}/></div>
                    </div>
                )
                :
                <h3 className='error'>There is no news</h3>
            }
        </div>
    );
};

export default NewsList;