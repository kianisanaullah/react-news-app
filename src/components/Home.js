import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../store/actions/articleActions';
import ArticleList from './ArticleList';
import NewsList from './NewsList';

const Home = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <div className="home">
            <h1>Home</h1>
        </div>

    );
};

export default Home;
