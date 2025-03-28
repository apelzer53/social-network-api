# Social Network API

## Description

The **Social Network API** is a backend RESTful API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It allows users to share thoughts, react to thoughts, and manage friend lists. The API includes routes to create, update, and delete thoughts, users, and manage friendships, allowing for a social networking experience.

### Features
- **User Creation:** Allows users to sign up with a username and email.
- **Thoughts:** Users can post, update, delete, and view thoughts.
- **Reactions:** Users can react to thoughts (like, love, etc.).
- **Friends:** Users can add or remove friends from their friend list.
- **CRUD Operations:** Full Create, Read, Update, Delete (CRUD) functionality for thoughts and users.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (using Mongoose)
- **JWT Authentication** for secure routes

## API Endpoints

### **User Routes**

- **GET /api/users**: Get all users
- **GET /api/users/:userId**: Get a specific user by ID
- **POST /api/users**: Create a new user
- **PUT /api/users/:userId**: Update a user's information
- **DELETE /api/users/:userId**: Delete a user

### **Thought Routes**

- **GET /api/thoughts**: Get all thoughts
- **GET /api/thoughts/:thoughtId**: Get a specific thought by ID
- **POST /api/thoughts**: Create a new thought
- **PUT /api/thoughts/:thoughtId**: Update a thought
- **DELETE /api/thoughts/:thoughtId**: Delete a thought

### **Friend Routes**

- **POST /api/users/:userId/friends/:friendId**: Add a friend
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend

### **Reaction Routes**

- **POST /api/thoughts/:thoughtId/reactions**: Create a reaction to a thought
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Delete a reaction from a thought

## Walkthrough Video

Check out this walkthrough video to see how the API works:

[**Social Network API Walkthrough**](https://drive.google.com/file/d/1ddO7xi_KDQJJprA4YF29VTDcmacO0582/view?usp=sharing)

## Future Improvements

- **User Authentication:** Implement full user authentication (login and registration) using JWT.
- **Postman Integration:** Create test suites using Postman for API endpoints.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

Distributed under the MIT License. See LICENSE for more information.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/apelzer53/social-network-api.git
2. Navigate to the project directory:

-bash
-Copy
-Edit
-cd social-network-api

3. Install dependencies:

bash
Copy
Edit
npm install
4. Set up your .env file with MongoDB URI and JWT secret key (if applicable).

5. Start the server:

bash
Copy
Edit
npm start
The API will run locally on http://localhost:3001.
