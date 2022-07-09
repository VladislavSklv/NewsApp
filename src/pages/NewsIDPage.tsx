import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchNewsByTitle } from '../async/FetchNews';
import Loader from '../components/Loader';
import Title from '../components/Title';

const NewsIDPage = () => {
    const params = useParams();
    const [article, setArticle]: any = useState({});

    const navigate = useNavigate();
    
    useEffect(() => {
        fetchNewsByTitle(params.title)
        .then((res: any) => {
            setArticle(res.articles);
        })
    }, [])
    
    return (
        <div className='row'>
            {article.length != 0 && article[0] != undefined
            ?
            <div className='col s12'>
                <Title className='col center'>{article[0].title}</Title>
                <img className='col s12' src={article[0].urlToImage}/>
                <h6 className='col s12'><b>Author: </b>{article[0].author}</h6>
                <h6 className='col s12'><b>Published time: </b>{article[0].publishedAt}</h6>
                <div className='col s12'>
                    <p className='flow-text col s12'>{article[0].description}</p>
                    <p className='flow-text col s12'>{article[0].content}</p>
                </div>
                <button onClick={() => navigate('/news/')} className="col s4 m2 l2 xl1 btn waves-effect waves-light red lighten-2" type="button" name="action">Go back
                    <i className="material-icons right">arrow_forward</i>
                </button>
            </div>
            :
            <div className='col m12 l8 offset-l2 xl10 offset-xl1'>
                <Loader />
            </div>
            }
        </div>
    );
};

export default NewsIDPage;