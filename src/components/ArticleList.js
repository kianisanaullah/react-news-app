import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                setError('');

                const apiKey = 'f38d9ade-b741-46ef-b354-a963812b9213';
                const apiUrl = 'https://content.guardianapis.com/search';
                if (searchKeyword || selectedCategory || selectedDate) {
                    const response = await axios.get(apiUrl, {
                        params: {
                            q: searchKeyword,
                            section: selectedCategory,
                            from: selectedDate,
                            'api-key': apiKey,
                        },
                    });

                    setArticles(response.data.response.results);
                } else {

                    const response = await axios.get(apiUrl, {
                        params: {
                            'api-key': apiKey,
                        },
                    });

                    setArticles(response.data.response.results);
                }
            } catch (error) {
                setError('Error fetching articles. Please try again later.');
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };


        fetchArticles();
    }, [searchKeyword, selectedCategory, selectedDate]);

    return (
        <div className="container">
            <h1 className="text-center mt-3">Article List</h1>
            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Search Keyword:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label>Select Category:</label>
                    <select
                        className="form-control"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="business">Business</option>
                        <option value="culture">Culture</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label>Select Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            <div className="row mt-3">
                {articles.map((article) => (
                    <div key={article.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{article.webTitle}</h5>
                                <p className="card-text">
                                    <strong>Category:</strong> {article.sectionName}
                                </p>
                                <p className="card-text">
                                    <strong>Date:</strong> {new Date(article.webPublicationDate).toLocaleDateString()}
                                </p>
                                <a href={article.webUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ArticleList;
