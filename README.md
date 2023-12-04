# News Feed App

## Introduction

This project implements a News Feed application with customization features such as selecting news sources, categories, and authors. The frontend is built with React.js, and the backend is developed using Laravel.

## Prerequisites

Before you start, make sure you have the following installed:

- Docker: [Get Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the repository:**

   ```
   git clone https://github.com/kianisanaullah/react-news-app.git
   cd react-news-app


2. Set up the frontend:
    cd frontend

3. Create a .env file:
   Copy the .env.example file to .env:
   cp .env.example .env

   Update the necessary environment variables in the .env file.
    REACT_APP_NEWS_API_KEY=your_news_api_key
    REACT_APP_BACKEND_URL=http://localhost:8000

4. Build and start the Docker containers:
    docker-compose build
    docker-compose up -d

5. Access the React application:
    Open your web browser and go to http://localhost:3000
