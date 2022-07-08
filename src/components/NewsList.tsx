import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../async/FetchNews';
import { AuthContext } from '../context';
import Loader from './Loader';

const NewsList: React.FC = () => {
    const [limit, setLimit] = useState(10);
    const {page} = useContext(AuthContext);
    const [news, setNews]: any = useState([]);

    const navigate = useNavigate();   

    useEffect(() => {
        fetchNews(page, limit)
        .then((res: any) => {
            const result: any = [];
            res.articles.forEach((article: any) =>{
                result.push(article);
            })
            setNews(result);
        })
    }, [page, limit])

    return (
        <div>
            {news.length != 0
                ?
                news.map((art: any) => 
                    <div key={art.publishedAt} className="row">
                        <div className="col m12 l8 offset-l2 xl10 offset-xl1">
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img src={art.urlToImage} />
                                    <span style={{zIndex: 2}} className="card-title">{art.title}</span>
                                </div>
                                <div className="card-content">
                                    <h5>{art.author}<i className="material-icons right activator curs-point">more_vert</i></h5>
                                    <p>{art.description}</p>
                                </div>
                                <div className="card-action">
                                    <a className='curs-point' onClick={() => navigate(`/news/${art.title}`)}>Read</a>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4"><b>Author: </b>{art.author}<i className="material-icons right">close</i></span>
                                    <h5 style={{paddingLeft: 0}} className='card-content'>{art.title}</h5>
                                    <p>Published at: {new Date(art.publishedAt).toLocaleString("en-US", {year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric'})}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                :
                <div className='row'>
                    <div className='col m12 l8 offset-l2 xl10 offset-xl1'>
                        <Loader />
                    </div>
                </div>
            }
        </div>
    );
};

export default NewsList;