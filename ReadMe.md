# Movies Listing App

## Overview

Welcome to the Movies Listing App! This application provides users with a way to browse, search, and manage a collection of movies. It is built with a Node.js backend, designed to offer efficient API endpoints for interacting with movie data.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing movie data
- **Mongoose**: ODM for MongoDB and Node.js
- **Axios**: Promise-based HTTP client for making API requests

## Installation

To get started with the Movies Listing App, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/movies-listing-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd movies-listing-app
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Set up your environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   MONGODB_URI=your_mongodb_uri
   PORT=3000
   ```

5. **Start the application:**

   ```bash
   npx nodemon src/server.js
   ```
