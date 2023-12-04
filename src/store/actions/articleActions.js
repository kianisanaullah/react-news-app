import axios from 'axios';

export const fetchArticles = () => async (dispatch) => {
    try {
        // const response = await axios.get('http://localhost:8000/api/articles');
        // dispatch({ type: 'FETCH_ARTICLES', payload: response.data });
    } catch (error) {
        // console.error('Error fetching articles:', error);
    }
};
