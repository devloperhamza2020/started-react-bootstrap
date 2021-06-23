import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopNews = () => {

    const [articles, setArticles] = useState([]);

    useEffect ( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ba26766a74a8448995a2be7e33f20d6b'
        fetch(url)
        .then((response) => response.json())
        .then(data => setArticles(data.articles))
    }, [])

    return (
        <div>
            <h1 className="" style={{backgroundColor: "lightblue"}}>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopNews;