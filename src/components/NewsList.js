// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const NewsList = () => {
//     const [selectedSource, setSelectedSource] = useState('');
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [selectedAuthors, setSelectedAuthors] = useState([]);
//     const [articles, setArticles] = useState([]);
//
//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const apiKey = '3044f9b071b04c4187eec0e1417aa3a5';
//
//                 let apiUrl = '';
//
//                 switch (selectedSource) {
//                     case 'newsapi':
//                         apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&categories=${selectedCategories.join(',')}&authors=${selectedAuthors.join(',')}`;
//                         break;
//
//                     case 'opennews':
//                         apiUrl = `https://opennewsapi.com/api/news?apiKey=${apiKey}&categories=${selectedCategories.join(',')}&authors=${selectedAuthors.join(',')}`;
//                         break;
//
//                     // Add more cases for other sources
//
//                     default:
//                         apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&categories=${selectedCategories.join(\',\')}&authors=${selectedAuthors.join(\',\')}';
//                         break;
//                 }
//
//                 if (apiUrl) {
//                     console.log('Constructed URL:', apiUrl);
//
//                     const response = await axios.get(apiUrl);
//                     console.log('Constructed URL resp:', response);
//
//                     setArticles(response.data.articles);
//                 } else {
//                     console.error('Invalid source or URL:', selectedSource);
//                 }
//             } catch (error) {
//                 console.error('Error fetching news:', error);
//             }
//         };
//         fetchNews();
//     }, [selectedSource, selectedCategories, selectedAuthors]);
//
//     return (
//         <div className="container">
//             <h1 className="text-center mt-3">Customize Your News Feed</h1>
//
//             {/* Dropdowns for customization */}
//             <div className="row mt-3">
//                 <div className="col-md-4">
//                     <label>Select Source:</label>
//                     <select
//                         className="form-control"
//                         value={selectedSource}
//                         onChange={(e) => setSelectedSource(e.target.value)}
//                     >
//                         <option value="newsapi">NewsAPI</option>
//                         <option value="opennews">OpenNews</option>
//                         {/* Add more source options as needed */}
//                     </select>
//                 </div>
//
//                 <div className="col-md-4">
//                     <label>Select Categories:</label>
//                     <select
//                         className="form-control"
//                         multiple
//                         value={selectedCategories}
//                         onChange={(e) => setSelectedCategories(Array.from(e.target.selectedOptions, (option) => option.value))}
//                     >
//                         <option value="business">Business</option>
//                         <option value="entertainment">Entertainment</option>
//                         <option value="general">General</option>
//                         <option value="health">Health</option>
//                         <option value="science">Science</option>
//                         <option value="sports">Sports</option>
//                         <option value="technology">Technology</option>
//                     </select>
//                 </div>
//
//                 <div className="col-md-4">
//                     <label>Select Authors:</label>
//                     <select
//                         className="form-control"
//                         multiple
//                         value={selectedAuthors}
//                         onChange={(e) => setSelectedAuthors(Array.from(e.target.selectedOptions, (option) => option.value))}
//                     >
//                         <option value="john_doe">John Doe</option>
//                         <option value="jane_smith">Jane Smith</option>
//                         <option value="sam_jackson">Sam Jackson</option>
//                         <option value="Amy B Wang">Amy B Wang</option>
//                         {/* Add more author options as needed */}
//                     </select>
//                 </div>
//             </div>
//             <div className="row mt-3">
//                 {articles.map((article, index) => (
//                     <div key={`${article.id}-${index}`} className="col-md-4 mb-4">
//                         <div className="card">
//                             <img src={article.urlToImage} className="card-img-top" alt="News" />
//                             <div className="card-body">
//                                 <h5 className="card-title">{article.title}</h5>
//                                 <p className="card-text">{article.description}</p>
//                                 <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
//                                     Read More
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default NewsList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
    const [selectedSource, setSelectedSource] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const apiKey = '3044f9b071b04c4187eec0e1417aa3a5'; // Replace with your NewsAPI key

                let apiUrl = '';

                switch (selectedSource) {
                    case 'newsapi':
                        apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&categories=${selectedCategories.join(',')}&authors=${selectedAuthors.join(',')}`;
                        break;

                    case 'opennews':
                        apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&categories=${selectedCategories.join(',')}&authors=${selectedAuthors.join(',')}`;
                        break;


                    default:
                        apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&categories=${selectedCategories.join(',')}&authors=${selectedAuthors.join(',')}`;
                        break;
                }

                if (apiUrl) {
                    console.log('Constructed URL:', apiUrl);

                    const response = await axios.get(apiUrl);
                    setArticles(response.data.articles);

                    // Extract authors and categories from the fetched articles
                    const allAuthors = Array.from(new Set(response.data.articles.map(article => article.author).filter(Boolean)));
                    const allCategories = Array.from(new Set(response.data.articles.map(article => article.category).filter(Boolean)));
                    console.log('Authors : ',allAuthors);
                    console.log('Cats : ',allCategories);

                    setSelectedAuthors(allAuthors);
                    setSelectedCategories(allCategories);
                } else {
                    console.error('Invalid source or URL:', selectedSource);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        // Fetch news whenever the selected source or categories/authors change
        fetchNews();
    }, [selectedSource, selectedCategories, selectedAuthors]);

    return (
        <div className="container">
            <h1 className="text-center mt-3">Customize Your News Feed</h1>

            {/* Dropdown for selecting news source */}
            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Select Source:</label>
                    <select
                        className="form-control"
                        value={selectedSource}
                        onChange={(e) => setSelectedSource(e.target.value)}
                    >
                        <option value="newsapi">NewsAPI</option>
                        <option value="opennews">OpenNews</option>
                    </select>
                </div>
            </div>

            {/* Dropdowns for selecting categories and authors */}
            <div className="row mt-3">
                <div className="col-md-4">
                    <label>Select Categories:</label>
                    <select
                        className="form-control"
                        multiple
                        value={selectedCategories}
                        onChange={(e) =>
                            setSelectedCategories(Array.from(e.target.selectedOptions, (option) => option.value))
                        }
                    >
                        {selectedCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <label>Select Authors:</label>
                    <select
                        className="form-control"
                        multiple
                        value={selectedAuthors}
                        onChange={(e) => setSelectedAuthors(Array.from(e.target.selectedOptions, (option) => option.value))}
                    >
                        {selectedAuthors.map((author) => (
                            <option key={author} value={author}>
                                {author}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* NewsList with user preferences */}
            <div className="row mt-3">
                {articles.map((article, index) => (
                    <div key={`${article.id}-${index}`} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={article.urlToImage} className="card-img-top" alt="News" />
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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

export default NewsList;
