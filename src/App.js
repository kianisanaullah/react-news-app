// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import PreferencesForm from './components/PreferencesForm';
import NewsList from './components/NewsList';
import ArticleList from './components/ArticleList';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/preferences" element={<PreferencesForm />} />
                    <Route path="/news_feed" element={<NewsList />} />
                    <Route path="/articles" element={<ArticleList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
